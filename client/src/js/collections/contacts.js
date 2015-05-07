var Contact = require('../models/contact');
var Config = require('../config/config.js');

var Contacts = Backbone.Firebase.Collection.extend({
  model: Contact,
  url: Config.firebaseUrl + '/Contacts'
});

module.exports = Contacts;
