module.exports = {
  dev: {
    tasks: ['nodemon:dev', 'watch', 'shell:mongo'],
    options: {
      logConcurrentOutput: true
    }
  }
};
