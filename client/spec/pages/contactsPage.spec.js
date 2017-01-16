const ContactsPage = require('../../src/js/pages/contactsPage');
const eventHub = require('watch_framework').EventHub;

let page;

describe('The Contacts Page', () => {
  beforeEach(() => {
    page = new ContactsPage();
  });

  describe('contacts data', () => {
    it('should have a contacts collection', () => {
      expect(page.contactsCollection).toBeDefined();
    });

    describe('loading data', () => {
      it('should load the data from ...');
    });
  });

  describe('button events', () => {
    beforeEach(() => {
      page.configureButtons();
    });

    describe('right', () => {
      it('should take the user to the home page', () => {
        spyOn(window.App, 'navigate');
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });

    describe('face', () => {
      it('should display "Oh noes!" to the user', () => {
        page.render();
        eventHub.trigger('face');
        expect(page.$el).toContainText('Oh noes!');
      });
    });
  });

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render();
      expect(page.$el).toContainHtml('<h1>Contacts</h1>');
    });

    it('should render each of the contacts', () => {
      spyOn(page, 'createContactHTML');
      page.contactsCollection.reset([{}, {}, {}, {}]);
      page.render();
      expect(page.createContactHTML.calls.count()).toEqual(4);
    });

    it('returns the view object', () => {
      expect(page.render()).toEqual(page);
    });
  });
});
