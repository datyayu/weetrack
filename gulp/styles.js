const gulp = require('gulp');
const plumber = require('gulp-plumber');
const connect = require('gulp-connect');
const gzip = require('gulp-gzip');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');
const nib = require('nib');

// Paths
const configFile = require('./config');
const config = configFile.styles;
const onError = configFile.onError;


/* TASKS */

// Compile stylus to css
gulp.task('styles-dev', () => {
  gulp.src(config.entry)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(stylus({
      use: nib(),
      compress: true,
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
});

gulp.task('styles', () => {
  gulp.src(config.entry)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(stylus({
      use: nib(),
      compress: true,
    }))
    .pipe(gzip())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest(config.dest));
});


/* WATCH TASKS */

// Watch for changes on .styl files.
gulp.task('watch::styles', ['styles-dev'], () => gulp.watch(config.src, ['styles-dev']));
