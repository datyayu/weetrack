# Module setup.
@app = angular.module "weetrack.controllers.feed", []

# Series Controller.
@app.controller "FeedCtrl", ($scope, $routeParams, FeedService) ->
  # Scope variables.
  # TODO: add proper support for following episodes.
  @followingEpisodes = {}
  @latestEpisodes = {}

  # Local variables.
  page = $routeParams.page || ""

  # Update page title.
  $scope.$emit "changeTitle", "Daily Feed"

  # Get feed from db.
  FeedService
    .getFeedInfo(page)
    .then (data) => 
        @followingEpisodes = data

  # Scope functions.
  # Get the time difference between added time and now
  @getTimeDiff = (date) ->
    dateStr = moment(date, 'X').toString()
    moment(dateStr).fromNow()


  return this
