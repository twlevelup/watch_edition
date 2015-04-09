module.exports = {
  options: {
    transform: ['hbsfy']
  },
  test: {
    src: './spec/**/*.spec.js',
    dest: 'spec/spec-bundle.js'
  },
  app: {
    src: [
      './src/js/main.js',
      './src/templates/**/*.hbs'
    ],
    dest: './public/js/main.js'
  }
};
