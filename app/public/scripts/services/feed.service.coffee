# Module setup.
@app = angular.module "weetrack.services.feed", []

# Feed service.
@app.service "FeedService", ($http, $q) ->
  # Get latest episode releases from db.
  @getFeedInfo = (page) ->
    deferred = $q.defer()

    $http.get "/api/feed/" + page
      .success( (seriesInfo) -> deferred.resolve seriesInfo)
      .error( (err) -> deferred.reject err)

    deferred.promise


  return this