'use strict';

var ContactsPage = require('../../src/js/views/contactsPage'),
  Router = require('../../src/js/router.js'),
  $ = require('jQuery');

global.router = new Router();

describe('The Contacts Page', function() {

  var contactsPage, router;

  beforeEach(function () {
    router = new Router();
    contactsPage = new ContactsPage();
  });

  describe('contacts data', function () {

    it('should have a contacts collection', function () {
      expect(contactsPage.contactsCollection).toBeDefined();
    });

    describe('loading data', function () {
      // it('')
    });

  });

  describe('button events', function () {

    beforeEach(function () {
      spyOn(global.router, 'navigate');
    });

    describe('button-right', function () {
      //it('should take you to the homepage', function () {
      //  var buttonRightAction = contactsPage.buttonEvents['button-right'];
      //  contactsPage[buttonRightAction]();
      //  expect(contactsPage.navigate).toHaveBeenCalledWith('');
      //});

      it('should take you to the hoe page', function () {

        var buttonRightAction = contactsPage.buttonEvents['button-right'];
        contactsPage[buttonRightAction]();
        expect(global.router.navigate).toHaveBeenCalledWith('', true);
      });

    });
  });

  describe('rendering', function () {

    beforeEach(function () {
      contactsPage.$el = $('div');
      contactsPage.contactsCollection.reset([{}, {}, {}]);
    });

    //it('should render each of the contacts', function () {
    //  spyOn(contactsPage, 'createContactHTML');
    //  contactsPage.render();
    //  expect(contactsPage.createContactHTML.calls.count()).toEqual(3);
    //});

  });

});
