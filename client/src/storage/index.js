const Backbone = require('backbone');
const eventsData = require('./events.json');

function Storage() {
  this.eventsData = new Backbone.Collection();
  this.eventsData.add(eventsData.events);
}

module.exports = new Storage();
