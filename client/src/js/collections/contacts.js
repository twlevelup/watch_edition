var Contact = require('../models/contact');

window.console.log(Backbone.Firebase);
var Contacts = Backbone.Firebase.Collection.extend({
  model: Contact,
  url: 'https://lvlup-watch-edition.firebaseIO.com/Contacts'
});

module.exports = Contacts;
