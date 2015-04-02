###
 # Using Rails-like standard naming convention for endpoints.
 # GET     /api/seasons              ->  index
 # POST    /api/seasons              ->  create
 # GET     /api/seasons/:id          ->  show
 # PUT     /api/seasons/:id          ->  update
 # DELETE  /api/seasons/:id          ->  destroy
###

Seasons = require "./seasons.model"


exports.index = (req, res) ->
  res.send Seasons
