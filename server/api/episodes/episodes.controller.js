/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/releases              ->  index
 * POST    /api/releases              ->  create
 * GET     /api/releases/:id          ->  show
 * PUT     /api/releases/:id          ->  update
 * DELETE  /api/releases/:id          ->  destroy
 */

import moment from 'moment';
import Episode from './episodes.model';
import Series from './../series/series.model';


// Return every episode on db.
export function index(req, res) {
  Episode.find({}, {
    'releases.fullhd._id': 0,
    'releases.hd._id': 0,
    'releases.lq._id': 0,
  })
    .select('-__v')
    .exec((error, episodes) => {
      if (error) { return res.send(error); }

      res.send(episodes);
    });
}


// Create a new episode
export function create(req, res) {
  const newEpisode = req.body;

  Episode.find({
    series: newEpisode.series,
    number: newEpisode.number,
  })
    .exec((findEpisodeError, result) => {
      if (findEpisodeError) { return res.send(findEpisodeError); }
      if (result.length > 0) { return res.send('Episode already exists'); }

      const episode = new Episode(newEpisode);
      episode.createdAt = moment().unix();
      episode.updatedAt = moment().unix();

      // Add episode to series.
      Series.find({_id: episode.series})
        .exec((findSeriesError, seriesList) => {
          if (findSeriesError) { return res.send(findSeriesError); }
          if (seriesList.length > 0) { return res.send('Episode\'s series doesn\'t exists'); }

          // Save episode to Episode document.
          episode.save((episodeSaveError, savedEpisode) => {
            if (episodeSaveError) { return res.send(episodeSaveError); }

            const series = seriesList[0];
            series.episodes.push(savedEpisode);
            series.updatedAt = moment().unix();

            series.save((seriesSaveError) => {
              if (seriesSaveError) { return res.send(seriesSaveError); }
              res.send(savedEpisode);
            });
          });
        });
    });
}


// Return the episodes from an specific series.
export function show(req, res) {
  const seriesId = req.params.series;

  Episode.find({ series: seriesId }, {
    'releases.fullhd._id': 0,
    'releases.hd._id': 0,
    'releases.lq._id': 0,
  })
    .select('-__v')
    .exec((error, episodes) => {
      if (error) { return res.send(error); }

      res.send(episodes);
    });
}


// Update an episode number and/or it's releases
export function update(req, res) {
  const episodeId = req.params.id;
  const updatedEpisode = req.body;

  Episode.find({_id: episodeId})
    .exec((findError, episodes) => {
      if (findError) { return res.send(findError); }
      if (episodes.length === 0) { return res.send('Episode not found'); }

      // Update info
      const episode = episodes[0];
      episode.number = updatedEpisode.number ? updatedEpisode.number : episode.number;
      episode.releases = updatedEpisode.releases ? updatedEpisode.releases : episode.releases;
      episode.createdAt = updatedEpisode.createdAt ? updatedEpisode.createdAt : episode.createdAt;
      episode.updatedAt = moment().unix();

      episode.save((saveError) => {
        if (saveError) { return res.send(saveError); }
        res.send(episode);
      });
    });
}


// Remove an episode from db.
export function destroy(req, res) {
  const episodeId = req.params.id;

  Episode.remove({_id: episodeId}, (error) => {
    if (error) { return res.send(error); }

    res.send('Episode removed');
  });
}
