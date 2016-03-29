/**
 * Backbone Collection iterator v0.1
 * https://github.com/jgoulah/backbone-collection-iterator
 */

'use strict';

_.extend(Backbone.Collection.prototype, {
  // return next model or the beginning if at the end
  next: function(model) {
    return this.at((this.indexOf(model) + 1) % _.size(this));
  },

  // return the previous model or the end if at the beginning
  prev: function(model) {
    var index = this.indexOf(model) - 1;
    return this.at(index > -1 ? index : _.size(this) - 1);
  }
});
