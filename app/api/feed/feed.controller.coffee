###
 # Using Rails-like standard naming convention for endpoints.
 # GET     /api/feed              ->  index
###

Episode = require "./../episodes/episodes.model"

exports.index = (req, res) ->
  Episode
    .find {}
    .sort "-createdAt"
    .limit 10
    .populate "series", "_id content.title content.min"
    .select "-__v"
    .exec (err, episodes) ->
      return res.send err if err

      res.send episodes

exports.show  = (req, res) ->
  page = req.params.page
  Episode
    .find {}
    .sort "-createdAt"
    .skip  10 * page
    .limit 10
    .select "-__v"
    .populate "series", "_id content.title content.min"
    .exec (err, episodes) ->
      return res.send err if err

      res.send episodes
