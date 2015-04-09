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
      port: process.env.PORT  || 8080,
      base: 'public',
      keepalive: true
    }
  }
};
