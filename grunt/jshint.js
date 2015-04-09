module.exports = {
  options: {
    jshintrc: true,
    reporter: require('jshint-stylish'),
  },
  all: [
    'Gruntfile.js',
    'grunt/*.js',
    'src/js/**/*.js',
    'spec/**/*.js',
    '!spec/*-bundle.js'
  ]
};
