# Module setup.
@app = angular.module "weetrack", [
  "ngRoute"
  "weetrack.services.feed"
  "weetrack.services.series"
  "weetrack.services.season"
  "weetrack.controllers.feed"
  "weetrack.controllers.main"
  "weetrack.controllers.season"
  "weetrack.controllers.series"
]

# Module config.
@app.config ($routeProvider, $sceDelegateProvider) ->
  # Provide access to youtube videos.
  $sceDelegateProvider.resourceUrlWhitelist [
      "self" 
      "*://www.youtube.com/**"
    ]

  $routeProvider
    # Daily Feed
    .when "/feed",
      controller: "FeedCtrl"
      controllerAs: "feed"
      templateUrl: "/assets/html/feed.html"

    # Current season lineup.
    .when "/currentSeason",
      controller: "SeasonCtrl"
      controllerAs: "season"
      templateUrl: "/assets/html/season.html"
    
    # Specific series info.
    .when "/series",
      controller: "SeriesCtrl"
      controllerAs: "series"
      templateUrl: "/assets/html/series.html" 
    
    # Redirect to home
    .otherwise
      redirectTo: "/feed"
