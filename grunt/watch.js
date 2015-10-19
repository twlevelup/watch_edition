module.exports = {
  options: {
    livereload: true
  },
  vendor: {
    files: ['client/src/vendor/**/*'],
    tasks: ['copy:vendor']
  },
  fonts: {
    files: ['client/src/fonts/**/*'],
    tasks: ['copy:fonts']
  },
  images: {
    files: ['client/src/images/**/*'],
    tasks: ['copy:images']
  },
  scripts: {
    files: ['client/src/js/**/*.js', 'client/src/templates/**/*.hbs', 'app/*.js'],
    tasks: ['test', 'webpack:build-dev'],
    options: {
      spawn: false,
    }
  },
  static: {
    files: ['client/src/*', 'client/src/img/**'],
    tasks: ['copy:static']
  }
};
