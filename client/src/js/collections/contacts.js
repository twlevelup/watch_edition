var Contact = require('../models/contact');

var Contacts = Backbone.Collection.extend({
  model: Contact,
  url: '/api/contacts'
});

module.exports = Contacts;
