var Contact = require('../models/contact');

var Contacts = Backbone.Firebase.Collection.extend({
  model: Contact,
  url: 'https://lvlup-watch-edition.firebaseIO.com/Contacts'
});

module.exports = Contacts;
