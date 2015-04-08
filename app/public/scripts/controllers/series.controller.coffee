# Module setup.
@app = angular.module "weetrack.controllers.series", []

# Series Controller.
@app.controller "SeriesCtrl", ($scope, $routeParams, SeriesService) ->
  # Scope variables.
  @info = {}

  # Local variables.
  seriesId = $routeParams.seriesId


  # Get series info from db.
  SeriesService
    .getSeriesInfo(seriesId)
    .then (data) => 
      @info = data 
      # Update page title to the series title.
      $scope.$emit "changeTitle", data.content.title

  # Scope functions.
  # TODO: track series.
  @track = (id) ->
    console.log "A kitty died because of you pressing that button"

  # Get the time difference between added time and now
  @getTimeDiff = (date) ->
    moment(date).fromNow()

  return this
