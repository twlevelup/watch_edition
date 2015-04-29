module.exports = {
  mongo: {
    command: 'mongod --config /usr/local/etc/mongod.conf',
    options: {
      async: true
    }
  }
};
