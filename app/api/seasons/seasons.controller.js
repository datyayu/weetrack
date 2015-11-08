/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/seasons              ->  index
 * POST    /api/seasons              ->  create
 * GET     /api/seasons/:id          ->  show
 * PUT     /api/seasons/:id          ->  update
 * DELETE  /api/seasons/:id          ->  destroy
 */
import Series from './../series/series.model';


export function show(req, res) {
  const season = req.params.id.replace('-', ' ');
  const seasonRegexp = new RegExp(season, 'i');

  Series.find({'content.season': seasonRegexp})
    .exec((error, seriesList) => {
      if (error) { return res.send(error); }
      if (seriesList.length === 0) { return res.send('No series found'); }

      res.send(seriesList);
    });
}
