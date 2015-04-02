# Dependencies.
express = require "express"
series  = require "./series"
seasons = require "./seasons"
feed    = require "./feed"

# Module variables.
router  = express.Router()


# API Routes.
router.use "/series", series
router.use "/seasons", seasons
router.use "/feed", feed


# Export router.
module.exports = router