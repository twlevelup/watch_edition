const Backbone = require('backbone');
const _ = require('underscore');

const contactTemplate = require('./contact.hbs');

const ContactView = Backbone.View.extend({

  tagName: 'li',

  template: contactTemplate,

  initialize() {
    _.bindAll(this, 'render');
  },

  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

});

module.exports = ContactView;
