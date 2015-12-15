const gulp = require('gulp');
const connect = require('gulp-connect');
const stylus = require('gulp-stylus');
const nib = require('nib');

// Paths
const config = require('./config').styles;


/* TASKS */

// Compile stylus to css
gulp.task('styles', () => {
  gulp.src(config.entry)
    .pipe(stylus({
      use: nib(),
      compress: true,
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
});


/* WATCH TASKS */

// Watch for changes on .styl files.
gulp.task('watch::styles', ['styles'], () => gulp.watch(config.src, ['styles']));
