# Dependencies
fs           = require "fs"
_            = require "lodash"
async        = require "async"
Watcher      = require "rss-watcher"
parser       = require "./episodeParser"

# Torrent feed
feed = "http://www.nyaa.se/?page=rss"
# Regex to torrent filtering.
regexFile = "./app/regex.txt"

setupFileAndStart = () ->
  checkForFile(regexFile, start)

start = () ->
  # Create a new watcher
  watcher = new Watcher feed
  watcher.set
    feed: feed
    interval: 60


  # Update on new episode.
  watcher.on "new article", (release) ->
    patterns = fs.readFileSync(regexFile, "utf8").split("\n")
    checkRelease(release)


  # Check initial feed.
  watcher.run (err, releases) ->
    console.log err if err
    
    # Check every release on initial feed
    async.eachSeries releases, checkRelease, (err) ->
      console.log err if err


# Check a release to find matching series. 
# If a match is founded, try to store it to db.
checkRelease = (release,  callback) ->
  calledCallback = no
  # Get filter patterns from pattern file.
  patterns = fs.readFileSync(regexFile, "utf8").split("\n")

  if release.categories[0] is "English-translated Anime"
    for pattern in patterns
      if release.title.match new RegExp(pattern, "i")
        console.log "\nNew release founded matching regex \"%s\" :", pattern
        console.log release.title
        
        parser.save(release, pattern, callback)
        calledCallback = yes
        break

  # Call callback if passed and it didn't found a match at 
  # pattern matching.
  if callback? and !calledCallback
    callback()

checkForFile = (fileName, callback) ->
  sampleMessage = "THIS_LINE_FIXES_PROBLEMS_DONT_YOU_DARE_TO_TOUCH_THIS"
  fs.exists fileName, (exists) ->
    if exists
      callback()
    else 
      fs.writeFile fileName, sampleMessage,{flag: 'wx'}, (err, data) ->
            callback()


module.exports = setupFileAndStart;