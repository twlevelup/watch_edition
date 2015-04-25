module.exports = {
  options: {
    livereload: true
  },
  styles: {
    files: ['client/src/styles/**/*.scss'],
    tasks: ['sass']
  },
  vendor: {
    files: ['client/src/vendor/**/*'],
    tasks: ['copy:vendor']
  },
  fonts: {
    files: ['client/src/fonts/**/*'],
    tasks: ['copy:fonts']
  },
  scripts: {
    files: ['client/src/js/**/*.js', 'client/src/templates/**/*.hbs'],
    tasks: ['browserify:app']
  },
  static: {
    files: ['client/src/*', 'client/src/img/**'],
    tasks: ['copy:static']
  }
};
