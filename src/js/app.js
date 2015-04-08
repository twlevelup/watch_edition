// app.js
global._ = require('underscore');
global.$ = require('jquery');
global.Backbone = require('backbone');

var greetings = require('./greetings');

var Friend = Backbone.Model.extend({
  name: null
});

var foo = new Friend();
