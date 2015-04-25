module.exports = {
  options: {
    livereload: true
  },
  styles: {
    files: ['client/src/styles/**/*.scss'],
    tasks: ['sass']
  },
  scripts: {
    files: ['client/src/js/**/*.js', 'client/src/templates/**/*.hbs'],
    tasks: ['browserify:app']
  },

  // TODO fix copy task
  static: {
    files: [],
    tasks: ['copy']
  }
};
