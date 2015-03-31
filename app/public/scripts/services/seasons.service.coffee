@app = angular.module "weetrack.services.season", []


@app.service "SeasonService", ($http, $q) ->
# Get season info from db
  getSeasonInfo: ->
    deferred = $q.defer()

    # TODO: Replace static json file for API.
    $http.get "../season.json"
      .success( (seriesInfo) -> deferred.resolve seriesInfo)
      .error( (err) -> deferred.reject err)

    deferred.promise

