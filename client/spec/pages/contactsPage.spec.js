const ContactsPage = require('../../src/js/pages/contactsPage');
const StorageHub = require('watch-framework').StorageHub;

describe('ContactsPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should have a template', () => {
      const page = new ContactsPage();
      expect(page.render()).toContain("<h1>Contacts</h1>");
    });

    it('should have a template with specific contacts', () => {
      const contacts = [
        { name: 'hi', phoneNumber: '1234' },
      ];
      StorageHub.setData('contacts', contacts)
      const page = new ContactsPage();
      page.pageWillLoad();
      expect(page.render()).toContain("<span>Name: hi</span>");
      expect(page.render()).toContain("<span>Phone: 1234</span>");
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to root page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new ContactsPage(props);
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

});
