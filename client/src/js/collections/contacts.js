var Contact = require('../models/contact');
var Config = require('../config/config.js');

var Contacts = Backbone.Collection.extend({
  model: Contact
});

module.exports = Contacts;
