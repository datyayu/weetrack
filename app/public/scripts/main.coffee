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
    .when "/series",
      controller: "SeriesCtrl"
      controllerAs: "series"
      templateUrl: "../html/series.html" 
    .when "/season",
      controller: "SeasonCtrl"
      controllerAs: "season"
      templateUrl: "../html/season.html"
    .otherwise
      redirectTo: "/season"
