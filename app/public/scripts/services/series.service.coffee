@app = angular.module "weetrack.services.series", []


@app.service "SeriesService", ($http, $q) ->
# Get series info from db
  getSeriesInfo: ->
    deferred = $q.defer()

    # TODO: Replace static json file for API.
    $http.get "../sample.json"
      .success( (seriesInfo) -> deferred.resolve seriesInfo)
      .error( (err) -> deferred.reject err)

    deferred.promise

