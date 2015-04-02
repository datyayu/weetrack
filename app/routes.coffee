# Dependencies
path    = require "path" 
express = require "express"
app     = express.Router()


# Custom routes
# series = require "api/series"


# Static files
assets = path.join __dirname, "assets"
libs   = path.join __dirname, "..", "bower_components"

app.use "/assets", express.static(assets)
app.use "/libs", express.static(libs)


# API Routes
# app.use "/series", series


# Send app
app.use "/", (req, res) ->
  res.sendFile path.join(__dirname, "assets", "html", "index.html")
  


module.exports = app
