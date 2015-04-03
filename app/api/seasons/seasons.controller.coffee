###
 # Using Rails-like standard naming convention for endpoints.
 # GET     /api/seasons              ->  index
 # POST    /api/seasons              ->  create
 # GET     /api/seasons/:id          ->  show
 # PUT     /api/seasons/:id          ->  update
 # DELETE  /api/seasons/:id          ->  destroy
###
Series = require "./../series/series.model"

exports.show = (req, res) ->
  season = req.params.id.replace "-", " " 
  seasonRegexp = new RegExp season, "i"

  Series
    .find {"content.season": seasonRegexp}, (err, seriesList) ->
      return res.send err if err
      return res.send "No series found" if seriesList.length is 0

      res.send seriesList 
