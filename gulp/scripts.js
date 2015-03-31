var gulp       = require('gulp');
var gutil      = require('gulp-util');
var connect    = require('gulp-connect');
var coffee     = require('gulp-coffee');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');

// Paths
var config = require('./config')


/* TASKS */

// Compile coffescript to js. 
// Includes source maps for easier debbuging.
gulp.task('scripts-dev', function () {
  gulp.src(config.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(coffee()).on('error', gutil.log)
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(connect.reload());
});


// Compile coffescript to js, and minimizes it for production.
// Does not include source maps.
gulp.task('scripts', function () {
  gulp.src(config.scripts.src)
    .pipe(concat('app.js'))
    .pipe(coffee({bare: true})).on('error', gutil.log)
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest(config.scripts.dest));
});


/* WATCH TASK */

// Watch for changes on  .coffee files
gulp.task('watch::scripts', ['scripts-dev'], function () {
    gulp.watch(config.scripts.src, ['scripts-dev']);
});