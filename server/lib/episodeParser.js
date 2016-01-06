import {waterfall} from 'async';
import {valuesIn, includes} from 'lodash';
import moment from 'moment';
import Episode from '../api/episodes/episodes.model';
import Series from '../api/series/series.model';


// Parse release rss obj to a simpler Episode-like object
function parseRelease(release) {
  // Split release text into it's components.
  const splittedRelease = release.title.split(/[\[\]]+/);

  // Try to split the release text using the format
  // [Fansub] Series-title - (episode number) [resolution]
  try {
    const fansub = splittedRelease[1].trim();
    const resolution = splittedRelease[3].trim();
    const seriesEpisode = splittedRelease[2].trim().split(/(\s\-\s)(?=[^(\s\-\s)]*$)/);
    const series = seriesEpisode[0].trim();
    const number = parseInt(seriesEpisode[2], 10);

    // Assign quality.
    let quality = null;

    if (resolution === '1080p') {
      quality = 'fullhd';
    } else if (resolution === '720p') {
      quality = 'hd';
    } else if (resolution === '480p') {
      quality = 'lq';
    }

    // Episode object to return.
    const episode = {
      series: series,
      number: number,
      quality: quality,
      group: fansub,
      url: release.link,
    };

    // Make sure the object does not contains any null property.
    if (!includes(valuesIn(episode), null)) {
      return episode;
    }

    return null;
  } catch (err) {
    return null;
  }
}


// Main export function
export function saveRelease(episode, matchedPattern, next) {
  waterfall([
    function parseEpisode(callback) {
      const parsedEpisode = parseRelease(episode);

      // Verify it was parsed without errors.
      if (parsedEpisode === null) {
        return callback('Error at parsing. Release not saved');
      }

      callback(null, parsedEpisode);
    },
    function findSeries(parsedEpisode, callback) {
      Series
        .findOne({ 'content.title': new RegExp(matchedPattern, 'gi') })
        .exec((error, series) => {
          if (error) { return callback(error); }

          // It should never trigger this since the series has to
          // exist to have a RegEx, but just in case.
          if (!series) { return callback('No series found'); }

          // Assign the founded series id to the release.
          parsedEpisode.series = series._id;

          callback(null, parsedEpisode, series);
        });
    },
    function checkEpisodeExistence(parsedEpisode, series, callback) {
      Episode.findOne({
        series: parsedEpisode.series,
        number: parsedEpisode.number,
      })
        .exec((error, result) => {
          if (error) { return callback(error); }

          let newEpisode = {};

          // If the episode already exist, make sure this release wasn't added
          if (result) {
            newEpisode = result;

            for (const release of newEpisode.releases[parsedEpisode.quality]) {
              if (release.group === parsedEpisode.group) {
                return callback('Release already exists');
              }
            }
          } else {
            // If the episode doesn't exist, make a new one.
            newEpisode = new Episode({});
            newEpisode.createdAt = moment().unix();
            newEpisode.series = parsedEpisode.series;
            newEpisode.number = parsedEpisode.number;
            series.episodes.push(newEpisode._id);
            series.content.episodes = series.content.episodes + 1;
          }

          // Add new release to the episode
          newEpisode.updatedAt = moment().unix();
          newEpisode.releases[parsedEpisode.quality].push({
            url: parsedEpisode.url,
            group: parsedEpisode.group,
          });
          callback(null, {episode: newEpisode, series: series});
        });
    },
    function saveEpisode(result, callback) {
      result.episode.save((error) => {
        if (error) { return callback(error); }

        callback(null, result.series);
      });
    },
    function saveSeries(series, callback) {
      series.save((error) => {
        if (error) { return callback(error); }

        callback(null, 'Saved successfully');
      });
    },
  ],
    (error, result) => {
      if (error) { console.log(error); }
      if (result) { console.log(result); }

      // call callback when finished
      if (next) { next(); }
    }
  );
}
