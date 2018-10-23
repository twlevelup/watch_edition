const HomePage = require('./homePage');
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
      const page = new HomePage();
      page.pageWillLoad();
      expect(StorageHub.setData).toBeCalledWith('contacts', expect.any(Array));
    })
  })

  describe('#render', () => {
    it('should render my page correctly', () => {
      const page = new HomePage();
      expect(page.render()).toContain("<div>Hello, World!</div>");
    });
  });

  describe('#leftButtonEvent', () => {
    it('audioHub plays a sound', () => {
      spyOn(AudioHub, 'playSound')
      const page = new HomePage();
      page.leftButtonEvent();
      expect(AudioHub.playSound).toBeCalledWith('./sounds/plop.mp3');
    });
  });

  describe('#rightButtonEvent', () => {
    it('goes to contacts page', () => {
      const page = new HomePage();
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
    it('updateTimeDisplays calls clock-time if its in the window', () => {
      const page = new HomePage();

      watchFace.innerHTML = page.render();

      jest.spyOn(page,"getDateTime");
      page.updateTimeDisplay(page.getDateTime);
      expect(page.getDateTime).toHaveBeenCalledTimes(1);
    });
  });

  describe('#updateTimeDisplay', () => {
    it('updateTimeDisplays does not call clock-time if its not in the window', () => {
      const page = new HomePage();

      jest.spyOn(page,"getDateTime");
      page.updateTimeDisplay(page.getDateTime);
      expect(page.getDateTime).toHaveBeenCalledTimes(0);
    });
  });

  describe('#updateTimeEverySecond', () => {
    it('update time display gets called three times in 3000 ms', () => {
      const page = new HomePage();

      spyOn(page, 'updateTimeDisplay');

      jest.useFakeTimers();
      page.updateTimeEverySecond();
      jest.runTimersToTime(3000);

      expect(page.updateTimeDisplay).toHaveBeenCalledTimes(3);
    });
  });
});
