# Module setup
@app = angular.module "weetrack.controllers.series", []

# Series Controller
@app.controller "SeriesCtrl", ($scope, SeriesService) ->
  @info = {}


  # Get series info from db
  SeriesService
    .getSeriesInfo()
    .then (data) => 
      @info = data 
      # Update page title to the series title.
      $scope.$emit "changeTitle", data.content.title

  @track = (id) ->
    # TODO: track series

  return this
