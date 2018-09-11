const HomePage = require('../../src/js/pages/homePage');
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;

describe('HomePage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#pageWillLoad', () => {
    it('should set contacts data on page load', () => {
      spyOn(StorageHub, 'setData')
      spyOn(AudioHub, 'setSound')
      const page = new HomePage();
      page.pageWillLoad();
      expect(StorageHub.setData).toBeCalledWith('contacts', expect.any(Array));
      expect(AudioHub.setSound).toBeCalledWith(expect.any(String), expect.any(String));
    })
  })

  describe('#template', () => {
    it('should have a template', () => {
      const page = new HomePage();
      expect(page.template()).toContain("<div>Hello, World!</div>");
    });
  });

  describe('#leftButtonEvent', () => {
    it('audioHub plays a sound', () => {
      spyOn(AudioHub, 'playSound')
      const page = new HomePage();
      // page.pageWillLoad();
      page.leftButtonEvent();
      expect(AudioHub.playSound).toBeCalledWith('bark');
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to contacts page', () => {
      const props = {
        navigate: () => { },
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('contacts');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('scrolls page down', () => {

      const page = new HomePage({ watchFace });

      page.bottomButtonEvent();

      expect(watchFace.scrollTop).toEqual(40);

    });
  });

  describe('#topButtonEvent', () => {
    it('scrolls page up', () => {
      const page = new HomePage({ watchFace });

      page.topButtonEvent();

      expect(watchFace.scrollTop).toEqual(-40);
    });
  });
});
