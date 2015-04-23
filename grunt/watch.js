module.exports = {
  options: {
    livereload: true
  },
  styles: {
    files: ['src/styles/**/*.scss'],
    tasks: ['sass']
  },
  scripts: {
    files: ['src/js/**/*.js', 'src/templates/**/*.hbs'],
    tasks: ['browserify:app']
  },
  static: {
    files: [],
    tasks: ['copy']
  }
};
