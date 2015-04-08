module.exports = function (grunt, options) {
  return {
    options: {
      reporter: require('jshint-stylish'),
      curly: false,
      eqeqeq: true,
      eqnull: true,
      browser: true,
      globals: {
        jQuery: true
      },
    },
    all: [
      'Gruntfile.js',
      'grunt/*.js',
      'src/js/**/*.js'
    ]
  };
};
