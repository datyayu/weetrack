# Module setup.
@app = angular.module "weetrack.controllers.season", []

# Series Controller.
@app.controller "SeasonCtrl", ($scope, $routeParams, SeasonService) ->
  # Scope variables
  # TODO: Replace 'updateAt' for a release date.
  @sortOption = "updatedAt"
  @sortReverse = no
  @series = {}
  @banner = ""

  # Local variables.
  # I really think "fall-2015" shouldn't be hardcoded but meh.
  season = $routeParams.season || "fall-2015"


  # Update page title.
  $scope.$emit "changeTitle", "Spring 2015 Anime Lineup"

  # Get seasonal info from db
  SeasonService
    .getSeasonInfo(season)
    .then (data) => 
      @series = data

  # Scope functions.
  # TODO: track series.
  @track = (id) ->
    console.log "A kitty died because of you pressing that button"
  
  # Switch between sorting options and reverse/non-reverse(?).
  @toggleSortOption = (option) ->
    if @sortOption isnt option
      @sortReverse = no
      @sortOption  = option
    else
      @sortReverse = !@sortReverse

  return this
  
