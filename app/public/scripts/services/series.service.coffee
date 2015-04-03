# Module setup.
@app = angular.module "weetrack.services.series", []

# Series service.
@app.service "SeriesService", ($http, $q) ->
  # Get specific series info from db.
  @getSeriesInfo = (seriesId) ->
    deferred = $q.defer()

    $http.get "/api/series/" + seriesId
      .success( (seriesInfo) -> deferred.resolve seriesInfo)
      .error( (err) -> deferred.reject err)

    deferred.promise

  return this
