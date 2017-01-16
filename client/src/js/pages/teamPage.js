const Backbone = require('backbone');
const template = require('../../templates/pages/team.hbs');

const teamPage = Backbone.View.extend({

  id: 'team',

  template,

  initialize() {
    this.render();
  },

  render() {
    this.$el.html(this.template());
    return this;
  },

});

module.exports = teamPage;
