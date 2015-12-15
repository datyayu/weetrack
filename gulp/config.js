const path = require('path');
const gutil = require('gulp-util');

const SCRIPTS_DIR = path.resolve(__dirname, '..', 'client', 'scripts');
const STYLES_DIR = path.resolve(__dirname, '..', 'client', 'styles');
const ASSETS_DIR = path.resolve(__dirname, '..', 'server', 'assets');

const SCRIPTS_ENTRY = path.resolve(SCRIPTS_DIR, 'entry.js');
const SCRIPTS_DEST = path.resolve(ASSETS_DIR, 'js');
const SCRIPTS_SRC = [
  path.resolve(SCRIPTS_DIR, '**', '*.js'),
  path.resolve(SCRIPTS_DIR, '**', '*.jsx'),
];

const STYLES_ENTRY = path.resolve(STYLES_DIR, 'entry.styl');
const STYLES_DEST = path.resolve(ASSETS_DIR, 'css');
const STYLES_SRC = path.resolve(STYLES_DIR, '**', '*.styl');

function onError(error) {
  gutil.log(gutil.colors.red(error));
  this.emit('end');
}


module.exports = {
  // Static files
  server: ASSETS_DIR,

  // ES6/7 -> ES5
  scripts: {
    entry: SCRIPTS_ENTRY,
    src: SCRIPTS_SRC,
    dest: SCRIPTS_DEST,
  },

  // Stylus -> CSS
  styles: {
    entry: STYLES_ENTRY,
    src: STYLES_SRC,
    dest: STYLES_DEST,
  },

  // Error handler
  onError: onError,
};
