###
 # Using Rails-like standard naming convention for endpoints.
 # GET     /api/releases              ->  index
 # POST    /api/releases              ->  create
 # GET     /api/releases/:id          ->  show
 # PUT     /api/releases/:id          ->  update
 # DELETE  /api/releases/:id          ->  destroy
###

# Dependencies
fs      = require "fs"
path    = require "path"
moment  = require "moment"
_       = require "lodash"
Series  = require "./series.model"
watcher = require "../../lib/feedWatcher"

regexFile = path.join(__dirname, "..", "..", "regex.txt")

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

  Series.find
    "content.title": newSeries.content.title
  ,
    (err, result) ->
      return res.send err if err
      return res.send "Series already exists" if result.length > 0

      series = new Series newSeries
      series.createdAt = moment().toString()
      series.updatedAt = moment().toString()

      # Save patterns for torrent indexing.
      for pattern in newSeries.regex
        fs.appendFile(regexFile, "\n" + pattern)

      series.save (err, series) ->
        return res.send err if err
        watcher.checkOldReleases()

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
    series.updatedAt = moment().toString()

    # Replace value in db if specified.
    series.content  = updatedSeries.content if updatedSeries.content?
    series.episodes = updatedSeries.episodes if updatedSeries.episodes?
    
    if updatedSeries.regex? and !_.isEqual(updatedSeries.regex, series.regex)
      addedFilters   = _.difference updatedSeries.regex, series.regex
      removedFilters = _.difference series.regex, updatedSeries.Regex
      series.regex   = updatedSeries.regex
      
      # Remove deleted filters
      if removedFilters.length > 0
        fs.readFile regexFile, "utf8", (err, data) ->
          return console.log err if err
          
          patchedData = data
          for filter in removedFilters
            # Remove filters from data.
            patchedData = patchedData.replace(new RegExp("\n"+ filter), "")

        # Write clean data to the file.
          fs.writeFile regexFile, patchedData, "utf8", (err) ->
            return console.log err if err


      # Add new filters.
      if addedFilters.length > 0
        for filter in addedFilters
          fs.appendFile(regexFile, "\n" + filter)

    series.save (err, series) ->
      return res.send err if err
      
      res.send series


# Remove an series from db.
exports.destroy = (req, res) ->
  seriesId = req.params.id

  Series.remove {_id: seriesId}, (err) ->
    return res.send err if err

    res.send "Series removed"

