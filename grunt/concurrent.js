module.exports = {
  dev: {
    tasks: ['nodemon:dev', 'watch', 'connect:dev'],
    options: {
      logConcurrentOutput: true
    }
  }
};
