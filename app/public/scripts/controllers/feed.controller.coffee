# Module setup
@app = angular.module "weetrack.controllers.feed", []

# Series Controller
@app.controller "FeedCtrl", ($scope, FeedService) ->
  @latestEpisodes = {}
  @followingEpisodes = {}

  # Update page title.
  $scope.$emit "changeTitle", "Daily Feed"

  # Get feed from db.
  FeedService
    .getFeedInfo()
    .then (data) => 
        @latestEpisodes   = data.lastestEpisodes
        @followingEpisodes = data.followingEpisodes

  return this
