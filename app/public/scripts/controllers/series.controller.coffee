# Module setup
@app = angular.module "weetrack.controllers.series", []

# Series Controller
@app.controller "SeriesCtrl", (SeriesService) ->
  @info = {}

  # Get series info from db
  SeriesService
    .getSeriesInfo()
    .then( 
      ( (data) -> @info = data ).bind @
    )

  @track = (id) ->
    # TODO: track series

  @