const Backbone = require('backbone');

const Contact = require('./model');

const Contacts = Backbone.Collection.extend({
  model: Contact,
});

module.exports = Contacts;
