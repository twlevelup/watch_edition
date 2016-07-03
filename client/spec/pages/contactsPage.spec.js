'use strict';

var ContactsPage = require('../../src/js/pages/contactsPage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The Contacts Page', function() {

  beforeEach(function() {
    page = new ContactsPage();
  });

  describe('contacts data', function() {

    it('should have a contacts collection', function() {
      expect(page.contactsCollection).toBeDefined();
    });

    describe('loading data', function() {
      it('should load the data from ...');
    });

  });

  describe('button events', function() {

    beforeEach(function() {
      page.configureButtons();
    });

    describe('right', function() {
      it('should take the user to the home page', function() {
        spyOn(window.App, 'navigate');
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

    describe('face', function() {
      it('should display "Oh noes!" to the user', function() {
        page.render();
        eventHub.trigger('face');
        expect(page.$el).toContainText('Oh noes!');
      });
    });
  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      page.render();
      expect(page.$el).toContainHtml('<h1>Contacts</h1>');
    });

    it('should render each of the contacts', function() {
      spyOn(page, 'createContactHTML');
      page.contactsCollection.reset([{}, {}, {}, {}]);
      page.render();
      expect(page.createContactHTML.calls.count()).toEqual(4);
    });

    it('returns the view object', function() {
      expect(page.render()).toEqual(page);
    });

  });

});
