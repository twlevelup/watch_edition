var _ = require('underscore'),
  $ = require('jquery'),
  Backbone = require('backbone');
console.log($.VERSION);
Backbone.$ = $;

global.$ = $;
global._ = _;
global.Backbone = Backbone;
