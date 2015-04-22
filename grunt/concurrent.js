module.exports = {
  dev: {
      tasks: ['watch:scripts', 'watch:styles', 'connect'],
      options: {
          logConcurrentOutput: true
      }
  }
};
