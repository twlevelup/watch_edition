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
      port: 5000,
      base: 'public',
      keepalive: true
    }
  }
};
