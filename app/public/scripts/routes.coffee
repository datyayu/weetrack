# Module setup.
@app = angular.module "weetrack.routes", [ "ngRoute" ]
 

# Module config.
@app.config ($locationProvider, $routeProvider, $sceDelegateProvider) ->
  # Provide access to youtube videos.
  $sceDelegateProvider.resourceUrlWhitelist [
      "self" 
      "*://www.youtube.com/**"
    ]

  # Enable html5 pushstate.
  $locationProvider.html5Mode(true)

  # Routes.
  $routeProvider
    # Daily Feed.
    .when "/feed",
      controller: "FeedCtrl"
      controllerAs: "feed"
      templateUrl: "/assets/html/feed.html"
    .when "/feed/:page",
      controller: "FeedCtrl"
      controllerAs: "feed"
      templateUrl: "/assets/html/feed.html"

    # Season linup
    .when "/currentSeason",
      controller: "SeasonCtrl"
      controllerAs: "season"
      templateUrl: "/assets/html/season.html"
    .when "/season/:season",
      controller: "SeasonCtrl"
      controllerAs: "season"
      templateUrl: "/assets/html/season.html"
    
    # Specific series info.
    .when "/series/:seriesId",
      controller: "SeriesCtrl"
      controllerAs: "series"
      templateUrl: "/assets/html/series.html" 
    


    # Redirect to home otherwise.
    # TODO: Make a missing/404 page layout.
    .otherwise
      redirectTo: "/feed"
