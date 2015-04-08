# Module setup.
angular.module "weetrack", [
  "weetrack.routes"
  "weetrack.services.feed"
  "weetrack.services.series"
  "weetrack.services.season"
  "weetrack.controllers.feed"
  "weetrack.controllers.main"
  "weetrack.controllers.season"
  "weetrack.controllers.series"
]