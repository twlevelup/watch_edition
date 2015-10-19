'use strict';

var Contact = require('../models/contact');

var Contacts = Backbone.Collection.extend({
  model: Contact
});

module.exports = Contacts;
