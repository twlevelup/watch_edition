module.exports = {
  dev: {
    tasks: ['nodemon:dev', 'watch', 'connect:dev', 'shell:mongo'],
    options: {
      logConcurrentOutput: true
    }
  }
};
