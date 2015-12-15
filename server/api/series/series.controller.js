/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/releases              ->  index
 * POST    /api/releases              ->  create
 * GET     /api/releases/:id          ->  show
 * PUT     /api/releases/:id          ->  update
 * DELETE  /api/releases/:id          ->  destroy
 */

// Dependencies
import fs from 'fs';
import {join} from 'path';
import moment from 'moment';
import {isEqual, difference} from 'lodash';
import Series from './series.model';
import watcher from '../../lib/feedWatcher';


const regexFile = join(__dirname, '..', '..', 'regex.txt');

// Get a list with all the series.
export function index(req, res) {
  Series.find({})
    .select('-__v')
    .exec((error, result) => {
      if (error) { return res.send(error); }

      const seriesList = result.map((series) => {
        return {
          title: series.content.title,
          episodes: series.content.episodes,
          season: series.content.season,
          id: series._id,
        };
      });

      res.send(seriesList);
    });
}


// Create a new series.
export function create(req, res) {
  const newSeries = req.body;

  Series.find({'content.title': newSeries.content.title})
    .exec((findError, result) => {
      if (findError) { return res.send(findError); }
      if (result.length > 0) { return res.send('Series already exists'); }

      const series = new Series(newSeries);
      series.createdAt = moment().unix();
      series.updatedAt = moment().unix();

      // Save patterns for torrent indexing.
      for (const pattern of newSeries.regex) {
        fs.appendFile(regexFile, `\n${pattern}`);
      }

      series.save((saveError, savedSeries) => {
        if (saveError) { return res.send(saveError); }

        watcher.checkOldReleases();
        res.send(savedSeries);
      });
    });
}


// Return an specific series.
export function show(req, res) {
  const seriesId = req.params.id;

  Series.findOne({_id: seriesId})
    .select('-__v')
    .populate('episodes')
    .exec((error, series) => {
      if (error) { return res.send(error); }

      res.send(series);
    });
}


// Update an episode number and/or it's releases
export function update(req, res) {
  const seriesId = req.params.id;
  const updatedSeries = req.body;

  Series.find({_id: seriesId})
    .exec((findError, seriesList) => {
      if (findError) { return res.send(findError); }
      if (seriesList.length === 0) { return res.send('Series not found'); }

      // Update info
      const series = seriesList[0];
      series.updatedAt = moment().unix();

      // Replace value in db if specified.
      series.content = updatedSeries.content ? updatedSeries.content : series.content;
      series.episodes = updatedSeries.episodes ? updatedSeries.episodes : series.episodes;

      if (updatedSeries.regex && !isEqual(updatedSeries.regex, series.regex)) {
        const addedFilters = difference(updatedSeries.regex, series.regex);
        const removedFilters = difference(series.regex, updatedSeries.Regex);
        series.regex = updatedSeries.regex;

        // Remove deleted filters
        if (removedFilters.length > 0) {
          fs.readFileSync(regexFile, 'utf8', (readError, data) => {
            if (readError) {
              console.log(readError);
              res.send('Internal Errror');
            }

            for (const filter of removedFilters) {
              // Remove filters from data.
              const patchedData = data.replace(new RegExp(`\n${ filter }`), '');

              // Write clean data to the file.
              fs.writeFile(regexFile, patchedData, 'utf8');
            }
          });
        }

        // Add new filters.
        if (addedFilters.length > 0) {
          for (const filter of addedFilters) {
            fs.appendFileSync(regexFile, `\n${ filter }`);
          }
        }
      }

      series.save((saveError, savedSeries) => {
        if (saveError) { return res.send(saveError); }

        res.send(savedSeries);
      });
    });
}


// Remove an series from db.
export function destroy(req, res) {
  const seriesId = req.params.id;

  Series.remove({_id: seriesId}, (error) => {
    if (error) { return res.send(error); }
    res.send('Series removed');
  });
}
