###
 # Using Rails-like standard naming convention for endpoints.
 # GET     /api/series              ->  index
 # POST    /api/series              ->  create
 # GET     /api/series/:id          ->  show
 # PUT     /api/series/:id          ->  update
 # DELETE  /api/series/:id          ->  destroy
###

Series = require "./series.model"


exports.index = (req, res) ->
  res.send Series
