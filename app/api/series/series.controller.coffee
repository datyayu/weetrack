###
 # Using Rails-like standard naming convention for endpoints.
 # GET     /api/releases              ->  index
 # POST    /api/releases              ->  create
 # GET     /api/releases/:id          ->  show
 # PUT     /api/releases/:id          ->  update
 # DELETE  /api/releases/:id          ->  destroy
###

Series = require "./series.model"

# Get a list with all the series.
exports.index = (req, res) ->
  Series
    .find {}
    .select '-__v'
    .exec (err, result) ->
      return res.send err if err
      
      seriesList = []
      for series, index in result
        seriesList[index] = 
          title: series.content.title
          episodes: series.content.episodes
          season: series.content.season
          id: series._id

      res.send seriesList


# Create a new series.
exports.create = (req, res) ->
  newSeries = req.body
  titleRegexp = new RegExp "^"+newSeries.content.title+"$", "i"

  Series.find
    "content.title": titleRegexp
  ,
    (err, result) ->
      return res.send err if err
      return res.send "Series already exists" if result.length > 0

      series = new Series newSeries
      series.createdAt = series.updatedAt = Date.now()

      series.save (err, series) ->
        return res.send err if err

        res.send series 


# Return an specific series.
exports.show = (req, res) ->
  seriesId = req.params.id

  Series
    .find {_id: seriesId}
    .select '-__v'
    .populate "episodes", "-__v -_id"
    .exec (err, series) ->
      return res.send err if err

      res.send series[0]


# Update an episode number and/or it's releases
exports.update = (req, res) ->
  seriesId      = req.params.id
  updatedSeries = req.body

  Series.find {_id: seriesId}, (err, seriesList) ->
    return res.send err if err
    return res.send "Series not found" if seriesList.length is 0
    
    # Update info
    series = seriesList[0]
    series.updatedAt = Date.now()
    if updatedSeries.content?
      series.content = updatedSeries.content
    if updatedSeries.episodes?
      series.episodes = updatedSeries.episodes

    series.save (err, series) ->
      return res.send err if err
      
      res.send series


# Remove an series from db.
exports.destroy = (req, res) ->
  seriesId = req.params.id

  Series.remove {_id: seriesId}, (err) ->
    return res.send err if err

    res.send "Series removed"

