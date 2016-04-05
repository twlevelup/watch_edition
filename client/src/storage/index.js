'use strict';

var eventsData = require("json!./events.json");

function Storage() {
  this.eventsData = new Backbone.Collection();
  this.eventsData.add(eventsData.events);
}

module.exports = new Storage();
