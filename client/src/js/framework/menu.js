'use strict';

var Page = require('./page');

var pageWithMenu = Page.extend({

  className: 'page page-with-menu',

  template: require('./templates/menu.hbs'),

  // NOTE should this page have built in/standard button configuration?

  // TODO add code to scroll the selected item in to view

  previous: function() {
    this.selected = this.collection.prev(this.selected);
    this.render();
  },

  next: function() {
    this.selected = this.collection.next(this.selected);
    this.render();
  },

  select: function() {
    // console.log(this.selected.cid);
  },

  initialize: function() {
    this.selected = this.collection.first();
  },

  getMenuItemLabel: function(menuItem) {
    return menuItem.get('label');
  },

  render: function() {
    var element = this.$el,
      html = document.createDocumentFragment();

    this.$el.html(this.template());

    this.collection.forEach(function(menuItem) {
      if (this.selected === menuItem) {
        $(html).append('<li class="selected">' + this.getMenuItemLabel(menuItem) + '</li>');
      } else {
        $(html).append('<li>' + this.getMenuItemLabel(menuItem) + '</li>');
      }
    }, this);

    this.$el.find('ul').html(html);

    return this;
  }

});

module.exports = pageWithMenu;
