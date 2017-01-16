const Page = require('watch_framework').Page;
const template = require('../../templates/pages/404.hbs');

const fourOhFour = Page.extend({

  id: 'contacts',

  template,

  initialize() {
    this.render();
  },

  render() {
    this.$el.html(this.template());
    return this;
  },

});

module.exports = fourOhFour;
