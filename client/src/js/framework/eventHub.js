'use strict';

function EventHub() {
  return _.extend({}, Backbone.Events);
}

module.exports = new EventHub();
