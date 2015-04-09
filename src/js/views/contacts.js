'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

var ContactsCollection = require('../collections/contacts'),
  ContactView = require('./contact');

var ContactsView = Backbone.View.extend({

    el: $('#watch-face'),

    template: require('../../templates/views/contacts.hbs'),

    initialize: function(){
      _.bindAll(this, 'render', 'appendItem', 'a');

      this.collection = new ContactsCollection();

      this.collection.push([
        {name: 'Adam', phoneNumber: '0431 111 111'},
        {name: 'Sam', phoneNumber: '0431 222 222'},
        {name: 'Shaheedha', phoneNumber: '0431 333 333'}
      ]);

      this.render();
    },

    a: function (e) {
      window.location.hash = '/';
    },

    render: function(){
      var self = this;
      this.$el.html(this.template());
      _.each(this.collection.models, function (contact){
        self.appendItem(contact);
      }, this);

      $('#a').click(this.a);

    },

    appendItem: function(contact){
      var contactView = new ContactView({
        model: contact
      });
      $('ul', this.el).append(contactView.render().el);
    }

  }
);

module.exports = ContactsView;
