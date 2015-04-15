'use strict';

var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

var ContactsCollection = require('../collections/contacts'),
  ContactView = require('./contact');

var ContactsView = Backbone.View.extend({

  className: 'screen',

  template: require('../../templates/views/contacts.hbs'),

  initialize: function() {
    _.bindAll(this, 'render', 'createContactHTML', 'navigate');

    this.contactsCollection = new ContactsCollection();

    this.loadContacts();

  },

  loadContacts: function () {
    this.contactsCollection.push([
      {name: 'Adam', phoneNumber: '0431 111 111'},
      {name: 'Sam', phoneNumber: '0431 222 222'},
      {name: 'Shaheedha', phoneNumber: '0431 333 333'}
    ]);
  },

  navigate: function() {
    window.location.hash = '/';
  },

  render: function() {

    this.$el.html(this.template());

    var contactsHTML = document.createDocumentFragment();

    $('body').on('click', '#a', this.navigate);

    this.contactsCollection.each(function(contact) {
      $(contactsHTML).append(this.createContactHTML(contact));
    }, this);

    this.$el.append(contactsHTML);

    return this;

  },

  createContactHTML: function(contact) {
      var view = new ContactView({
        model: contact
      });
  		return view.render().el;
    }

  }
);

module.exports = ContactsView;
