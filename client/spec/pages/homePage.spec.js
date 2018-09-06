const HomePage = require('../../src/js/pages/homePage');
const StorageHub = require('watch-framework').StorageHub;

describe('HomePage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#pageWillLoad', () => {
    it('should set contacts data on page load', () => {
      spyOn(StorageHub, 'setData')
      const page = new HomePage();
      page.pageWillLoad();
      expect(StorageHub.setData).toBeCalledWith('contacts', expect.any(Array))
    })
  })

  describe('#template', () => {
    it('should have a template', () => {
      const page = new HomePage();
      expect(page.template()).toContain("<div>Hello, World!</div>");
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

  describe('#updateTimeDisplay', () => {
    it('gets current time if there is a clock-time', () => {
      const page = new HomePage();
      watchFace.innerHTML = page.template();

      spyOn(page, 'getTime');

      page.updateTimeDisplay();
      expect(page.getTime).toHaveBeenCalledTimes(1);
    });
  });

  describe('#updateTimeEverySecond', () => {
    it('update time display gets called three times in 3500 ms', () => {
      const page = new HomePage();

      spyOn(page, 'updateTimeDisplay');

      page.updateTimeEverySecond();

      jest.useFakeTimers();
      setTimeout(() => {
        expect(page.updateTimeDisplay).toHaveBeenCalledTimes(3);
      }, 3500)
    });
  });
});