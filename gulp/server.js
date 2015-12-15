const gulp = require('gulp');
const connect = require('gulp-connect');

const BASE_DIR = require('./config').server;


// Start a node static server with livereload.
gulp.task('server', () => connect.server({
  root: BASE_DIR,
  port: process.env.PORT || 3000,
  livereload: true,
}));
