module.exports = function (grunt, options) {
  return {
    server: {
      options: {
        port: 9001,
        base: 'public',
        keepalive: true
      }
    }
  };
};
