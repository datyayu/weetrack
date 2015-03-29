var gulp    = require('gulp');
var connect = require('gulp-connect');
var stylus  = require('gulp-stylus');
var nib     = require('nib');

// Paths
var config = require('./config');


/* TASKS */

// Compile stylus to css
gulp.task('styles', function () {
  gulp.src(config.styles.src)
    .pipe(stylus({
      use: nib(),
      compress: true
    }))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(connect.reload());
});


// Right now, this 'html' task isn't really useful at all,
// but it may be useful if I decide to use a template engine
//  later.
gulp.task('layouts', function () {
  gulp.src(config.layouts.src)
    .pipe(gulp.dest(config.layouts.dest))
    .pipe(connect.reload());
});


/* WATCH TASKS */

// Watch for changes on .styl files.
gulp.task('watch::styles', ['styles'], function () {
  gulp.watch(config.styles.dir, ['styles']);
});

// Watch for changes on .html files.
gulp.task('watch::layouts', ['layouts'], function () {
  gulp.watch(config.layouts.src, ['layouts']);
});
