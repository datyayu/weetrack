const gulp = require('gulp');
const connect = require('gulp-connect');
const uglify = require('gulp-uglify');
const gzip = require('gulp-gzip');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

// Browserify stuff
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babel = require('babelify');

// Paths
const configFile = require('./config');
const config = configFile.scripts;
const onError = configFile.onError;


/* Bundle functions */

// Bundle and write the data with LR and sourcemaps.
function developmentBundle(bundler) {
  console.log('-> bundling...');

  return bundler.bundle()
    .on('error', onError)
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
}

// Bundle and write the data minified for production.
function productionBundle(bundler) {
  console.log('-> bundling...');

  return bundler.bundle()
    .on('error', onError)
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gzip())
    .pipe(rename('app.js'))
    .pipe(gulp.dest(config.dest));
}

/* Compile with browserify and babel */
function compile(isProductionBundle) {
  const browserifyBundler = browserify(config.entry, { debug: !isProductionBundle });
  const bundler = browserifyBundler.transform(babel);

  if (isProductionBundle) {
    return productionBundle(bundler);
  }

  const devBundler = watchify(bundler);

  devBundler.on('update', () => developmentBundle(devBundler));

  return developmentBundle(devBundler);
}


/* TASKS */
gulp.task('watch::scripts', () => compile(false));
gulp.task('scripts', () => compile(true));
