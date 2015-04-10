# Dependencies.
http       = require "http"
express    = require "express"
bodyParser = require "body-parser"
mongoose   = require "mongoose"
routes     = require "./routes"
watcher    = require "./lib/feedWatcher"

# Local variables.
app = express()

# Middleware.
app.use bodyParser.json()

# Initiate database
url = process.env.MONGOLAB_URI || "mongodb://localhost/test"
mongoose.connect url

# Prevent heroku dyno from sleeping, pinging every 5min.
setInterval  () -> 
  http.get "http://weetrack.herokuapp.com" 
, 300000 

# Routes.
app.use routes

# Inititate feed watcher
watcher()


# Expose or import app.
#if !module.parent
port = process.env.PORT or 9000

app.listen port, ->
  console.log "\n\t\tWeeTrack"
  console.log "Nyaa-based Anime Release Tracker by @datyayu"
  console.log "\tListening on port ", port, "\n"
    
#else
#  module.exports = app