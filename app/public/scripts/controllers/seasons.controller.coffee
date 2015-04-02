# Module setup
@app = angular.module "weetrack.controllers.season", []

# Series Controller
@app.controller "SeasonCtrl", ($scope, SeasonService) ->
  @sortOption = "title"
  @series = {}
  @banner = ""

  # Update page title.
  $scope.$emit "changeTitle", "Spring 2015 Anime Lineup"

  # Get seasonal info from db
  SeasonService
    .getSeasonInfo()
    .then (data) => 
      @series = data.series
      @banner = data.image

  @track = (id) ->
    # TODO: track series

  return this
  
