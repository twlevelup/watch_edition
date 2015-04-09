module.exports = {
  app: {
    src: ['src/js/main.js', 'src/templates/*.hbs'],
    dest: 'public/js/main.js',
    options: {
      transform: ['hbsfy']
    }
  }
};
