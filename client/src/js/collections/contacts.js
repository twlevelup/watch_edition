const Backbone = require('backbone');

const Contact = require('../models/contact');

const Contacts = Backbone.Collection.extend({
  model: Contact,
});

module.exports = Contacts;
