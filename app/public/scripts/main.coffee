# Module setup
@app = angular.module "weetrack", [
  "ngRoute",
  "weetrack.services.series"
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
    .otherwise
      redirectTo: "/series"
