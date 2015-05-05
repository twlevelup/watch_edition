module.exports = {
  staging: {
    options: {
      port: process.env.PORT  || 8080,
      base: 'public',
      keepalive: true
    }
  }
};
