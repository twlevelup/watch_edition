module.exports = {
  dev: {
    options: {
      port: 9001,
      base: 'public',
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
