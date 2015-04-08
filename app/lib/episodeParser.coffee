fs        = require "fs"
async     = require "async"
_         = require "lodash"
moment    = require "moment"
Episode   = require "../api/episodes/episodes.model"
Series    = require "../api/series/series.model"


# Main export function 
exports.save = (episode, matchedPattern, next) ->
  async.waterfall [
        # Parse episode
        (callback) ->
          errorFile = "./app/errorFile.txt"
          parsedEpisode = parseRelease episode
          # Verify it was parsed without errors.
          if parsedEpisode is null
            callback("Error at parsing. Release not saved")
          else
            callback(null, parsedEpisode)
      ,
        # Find the series
        (parsedEpisode, callback) -> 
          Series
            .find {"content.title": new RegExp matchedPattern, "i"} 
            .exec (err, seriesList) -> 
              return callback err if err
              # It should never trigger this since the series has to 
              # exist to have a RegEx, but just in case.
              return "Series not found" if seriesList.length is 0

              # Assign the founded series id to the release.
              parsedEpisode.series = seriesList[0]._id

              callback null, parsedEpisode,seriesList[0]
      ,
        # Check if the episode already exists.
        (parsedEpisode, series, callback) ->
          Episode
            .find 
              series: parsedEpisode.series
              number: parsedEpisode.number
            .exec (err, result) ->

              return callback err if err
              episode = {}
              
              # If the episode already exist, make sure this release wasn't added
              if result.length > 0
                episode = result[0]
                episode._id = result[0]._id
                for release in episode.releases[parsedEpisode.quality]
                  return callback "Release already exists" if release.group is parsedEpisode.group
              # If the episode doesn't exist, make a new one.
              else
                episode = new Episode ({})
                episode.createdAt = moment()
                episode.series = parsedEpisode.series
                episode.number = parsedEpisode.number

                # Added the id to series.
                series.episodes.push episode._id
                series.updatedAt = moment()
                series.content.episodes = series.episodes.length
              
              # Add new release to the episode
              episode.updatedAt = moment()
              episode.releases[parsedEpisode.quality].push 
                url: parsedEpisode.url
                group: parsedEpisode.group

              callback null, {episode: episode, series: series}       
      ,
        # Save the episode.
        (result, callback) ->
          result.episode.save (err, episode) ->
            return callback err if err

            callback null, result.series
      ,
        # Save the reference on the series.
        (series, callback) ->
          series.save (err, series) ->
            return callback err if err
            callback null, "Saved successfully"
      ], (err, result) ->
        console.log err if err
        console.log result if !err
        
        # call callback when finished
        next() if next?


# Parse release rss obj to a simpler Episode-like object
parseRelease = (release) ->
  # Split release text into it's components. 
  splittedRelease   = release.title.split(/[\[\]]+/)

  # Try to split the release text using the format
  # [Fansub] Series-title - (episode number) [resolution]
  try
    fansub         = splittedRelease[1].trim()
    resolution     = splittedRelease[3].trim()
    series_episode = splittedRelease[2].trim().split(/(\s\-\s)(?=[^(\s\-\s)]*$)/)
    series         = series_episode[0].trim()
    number         = parseInt(series_episode[2])
    
    # Asign quality.
    quality = null
    if resolution is "1080p"
      quality = "fullhd"
    else if resolution is "720p"
      quality = "hd"
    else if resolution is "480p"
      quality = "lq"
    
    # Episode object to return.
    episode =
      series: series
      number: number
      quality: quality
      group: fansub
      url: release.link

    # Make sure the object does not contains any null property.
    if !_.includes(_.valuesIn(episode), null)
      return episode
    else
      return null

  catch err
    return null
