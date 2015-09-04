var Cocktail = require('../models/cocktail');
var Config = require('../config/config.js');

var Cocktails = Backbone.Firebase.Collection.extend({
  model: Cocktail,
  url: Config.firebaseUrl + '/Cocktails'
});

module.exports = Cocktails;
