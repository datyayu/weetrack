var config = {
  // HTML
  layouts: {
    src: './app/public/layouts/**/*.html',
    dest: './app/assets/html/'
  },

  // Stylus processing
  styles: {
    src: './app/public/stylus/**/*.styl',
    dest: './app/assets/css/'
  },

  // Coffee -> js
  scripts: {
    src: './app/public/scripts/**/*.coffee',
    dest: './app/assets/js/'
  }
};


module.exports = config;