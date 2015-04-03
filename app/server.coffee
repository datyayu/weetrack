# Dependencies.
express    = require "express"
bodyParser = require "body-parser"
mongoose   = require "mongoose"
routes     = require "./routes"

# Local variables.
app = express()

# Middleware.
app.use bodyParser.json()

# Initiate database
mongoose.connect "mongodb://localhost/test"

# Routes.
app.use routes


# Expose or import app.
if !module.parent
  port = process.env.PORT or 9000

  app.listen port, ->
    console.log "Listening on port ", port
else
  module.exports = app