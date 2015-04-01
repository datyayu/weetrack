# Module setup
@app = angular.module "weetrack", [
  "ngRoute",
  "weetrack.services.series",
  "weetrack.services.season",
  "weetrack.controllers.season",
  "weetrack.controllers.series"
]

@app.config ($routeProvider, $sceDelegateProvider) ->
  $sceDelegateProvider
    .resourceUrlWhitelist [
      "self", 
      "*://www.youtube.com/**"
    ]

  $routeProvider
    .when "/feed",
      controller: "FeedCtrl"
      controllerAs: "feed"
      templateUrl: "../html/feed.html"

    .when "/season",
      controller: "SeasonCtrl"
      controllerAs: "season"
      templateUrl: "../html/season.html"
    
    .when "/series",
      controller: "SeriesCtrl"
      controllerAs: "series"
      templateUrl: "../html/series.html" 
    
    .otherwise
      redirectTo: "/season"
