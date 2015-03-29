var gulp = require('gulp');
var fs   = require('fs');


// Export task from the gulp folder.
fs.readdirSync(__dirname + '/gulp/').forEach(function (task) {
  require('./gulp/' + task)
});



// Development task
gulp.task('dev', [
  'watch::layouts', 
  'watch::styles', 
  'watch::scripts', 
  'server'
]);

// Production task
gulp.task('default', [
  'layouts',
  'styles', 
  'scripts'
]);
