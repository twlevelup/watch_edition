module.exports = {
  dev: {
    options: {
      port: 9001,
      base: 'public',
      keepalive: true,
      livereload: true
    }
  },
  staging: {
    options: {
      port: 8080,
      base: 'public',
      keepalive: true
    }
  }
};
