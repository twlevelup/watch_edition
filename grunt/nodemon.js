module.exports= {
  dev: {
    options: {
      file: 'server.js',
      nodeArgs: ['--debug'],
      watchedFolders: ['app'],
      env: {
        PORT: '3300'
      }
    }
  }
};
