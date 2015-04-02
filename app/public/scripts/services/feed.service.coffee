@app = angular.module "weetrack.services.feed", []


@app.service "FeedService", ($http, $q) ->
# Get season info from db
  getFeedInfo: ->
    deferred = $q.defer()

    # TODO: Replace static json file for API.
    $http.get "../feed.json"
      .success( (seriesInfo) -> deferred.resolve seriesInfo)
      .error( (err) -> deferred.reject err)

    deferred.promise

