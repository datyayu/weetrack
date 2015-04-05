###
 # Using Rails-like standard naming convention for endpoints.
 # GET     /api/releases              ->  index
 # POST    /api/releases              ->  create
 # GET     /api/releases/:id          ->  show
 # PUT     /api/releases/:id          ->  update
 # DELETE  /api/releases/:id          ->  destroy
###

moment  = require "moment"
Episode = require "./episodes.model"
Series  = require "./../series/series.model"

# Return every episode on db.
exports.index = (req, res) ->
  Episode
    .find {}, 
      "releases.fullhd._id": 0
      "releases.hd._id": 0
      "releases.lq._id": 0
    .select '-__v'
    .exec (err, episodes) ->
      return res.send err if err

      res.send episodes


# Create a new episode
exports.create = (req, res) ->
  newEpisode = req.body

  Episode.find 
    series: newEpisode.series
    number: newEpisode.number
  ,
    (err, result) ->
      return res.send err if err
      return res.send "Episode already exists" if result.length > 0
      
      episode = new Episode newEpisode
      episode.createdAt = moment().toString()
      episode.updatedAt = moment().toString()

      # Add episode to series.
      Series.find {_id: episode.series}, (err, result) ->
        return res.send err if err
        return res.send "Episode's series does not exists" if result.length is 0

        # Save episode to Episode document.
        episode.save (err, episode) ->
          return res.send err if err

          series = result[0]
          series.episodes.push episode
          series.updatedAt = moment().toString()
          series.save (err, series) ->
            return res.send err if err

            res.send episode


# Return the episodes from an specific series.
exports.show = (req, res) ->
  seriesId = req.params.series

  Episode
    .find {series: seriesId},
      "releases.fullhd._id": 0
      "releases.hd._id": 0
      "releases.lq._id": 0
    .select '-__v'
    .exec (err, episodes) ->
      return res.send err if err

      res.send episodes


# Update an episode number and/or it's releases
exports.update = (req, res) ->
  episodeId      = req.params.id
  updatedEpisode = req.body

  Episode.find {_id: episodeId}, (err, episodes) ->
    return res.send err if err
    return res.send "Episode not found" if episodes.length is 0
    
    # Update info
    episode           = episodes[0]
    episode.number    = updatedEpisode.number
    episode.releases  = updatedEpisode.releases
    episode.updatedAt = moment().toString()

    episode.save (err, episode) ->
      return res.send err if err
      
      res.send episode


# Remove an episode from db.
exports.destroy = (req, res) ->
  episodeId = req.params.id

  Episode.remove {_id: episodeId}, (err) ->
    return res.send err if err

    res.send "Episode removed"