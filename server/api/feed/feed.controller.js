/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/feed              ->  index
 */

import Episode from './../episodes/episodes.model';


export function index(req, res) {
  Episode.find({})
    .sort('-createdAt')
    .limit(10)
    .populate('series', '_id content.title content.min')
    .select('-__v')
    .exec((error, episodes) => {
      if (error) { return res.send(error); }

      res.send(episodes);
    });
}

export function show(req, res) {
  const page = req.params.page;

  Episode.find({})
    .sort('-createdAt')
    .skip(10 * page)
    .limit(10)
    .select('-__v')
    .populate('series', '_id content.title content.min')
    .exec((error, episodes) => {
      if (error ) { return res.send(error); }

      res.send(episodes);
    });
}
