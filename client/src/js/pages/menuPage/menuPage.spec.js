const MenuPage = require('./menuPage');
const StorageHub = require('watch-framework').StorageHub;

describe('MenuPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render my specific menu items', () => {
      const menuDetails = [
        { name: 'hi', phoneNumber: '1234' },
      ];
      StorageHub.setData('menuDetails', menuDetails)
      const page = new MenuPage();
      page.pageWillLoad();
      expect(page.render()).toContain("<span>hi</span>");
    });
  });
});
