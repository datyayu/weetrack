# Module setup
@app = angular.module "weetrack.controllers.main", []

# Series Controller
@app.controller "MainCtrl", ($rootScope, $location)->
  @activeItem = $location.path().split('/')[1]
  @pageTitle  = ""
  @showMenu   = no

  # Update menu item on route change. 
  $rootScope.$on "$routeChangeStart", =>
    @pageTitle  = "Weetrack"
    @activeItem = $location.path().split('/')[1] 
    @showMenu   = no

  # Update title on request.
  $rootScope.$on "changeTitle", (_, title) =>
    @pageTitle = title

  return this

