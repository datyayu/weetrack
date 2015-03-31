# Module setup
@app = angular.module "weetrack.controllers.season", []

# Series Controller
@app.controller "SeasonCtrl", (SeasonService) ->
  @sortOption = "title"
  @series = {}
  @banner = ""

  SeasonService
    .getSeasonInfo()
    .then( 
      ((data) -> 
        @series = data.series
        @banner = data.image
      ).bind @
    )

  @track = (id) ->
    # TODO: track series

  @
