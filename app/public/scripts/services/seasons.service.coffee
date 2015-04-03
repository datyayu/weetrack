# Module setup.
@app = angular.module "weetrack.services.season", []

# Season service.
@app.service "SeasonService", ($http, $q) ->
  # Get specific season info from db.
  @getSeasonInfo = (season) ->
    deferred = $q.defer()

    $http.get "/api/seasons/" + season
      .success( (seriesInfo) -> deferred.resolve seriesInfo)
      .error( (err) -> deferred.reject err)

    deferred.promise


  return this