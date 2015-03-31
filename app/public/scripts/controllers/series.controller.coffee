# Module setup
@app = angular.module "weetrack.controllers.series", []

# Series Controller
@app.controller "SeriesCtrl", ($scope, SeriesService) ->
  vm = $scope
  vm.series = {}

# Get series info from db
  SeriesService
    .getSeriesInfo()
    .then( (data) -> vm.series = data)
