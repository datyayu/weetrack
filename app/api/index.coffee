# Dependencies.
express  = require "express"
episodes = require "./episodes"
feed     = require "./feed"
seasons  = require "./seasons"
series   = require "./series"

# Module variables.
router  = express.Router()

# API Routes.
router.use "/episodes", episodes
router.use "/feed", feed
router.use "/seasons", seasons
router.use "/series", series


# Export router.
module.exports = router