# Module setup.
angular.module "weetrack", [
  "weetrack.routes"
  "weetrack.services.feed"
  "weetrack.services.series"
  "weetrack.services.season"
  "weetrack.controllers.seriesList"
  "weetrack.controllers.feed"
  "weetrack.controllers.main"
  "weetrack.controllers.season"
  "weetrack.controllers.series"
]