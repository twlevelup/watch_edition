module.exports = {
  dev: {
    script: 'server.js',
    options: {
      nodeArgs: ['--debug'],
      watchedFolders: ['app'],
      env: {
        PORT: '3300'
      }
    }
  }
};
