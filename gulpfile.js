const gulp = require('gulp');
const fs = require('fs');
const path = require('path');

const GULP_PATH = path.resolve(__dirname, 'gulp');


// Export task from the gulp folder.
fs.readdirSync(GULP_PATH)
  .forEach(task => require('./gulp/' + task));


// Development task
gulp.task('dev', [
  'watch::styles',
  'watch::scripts',
  'server',
]);

// Production task
gulp.task('build', [
  'styles',
  'scripts',
]);
