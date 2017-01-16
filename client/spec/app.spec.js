const watchFramework = require('watch_framework');
const Router = require('../src/js/router');
const app = require('../src/js/app');

const WatchFace = watchFramework.WatchFace;
const NotificationHandler = watchFramework.NotificationHandler;

// TODO replace .on with listenTo

describe('The App', () => {
  beforeEach(() => {
    app.start();
  });

  it('should have a router', () => {
    expect(app.router instanceof Router).toBeTruthy();
  });

  it('should have a watch face', () => {
    expect(app.watchFace instanceof WatchFace).toBeTruthy();
  });

  it('should have a notification handler', () => {
    expect(app.notificationHandler instanceof NotificationHandler).toBeTruthy();
  });

  it('should have an event hub', () => {
    // TODO it would be good to check type of app.vent
    expect(app.vent.on).toBeTruthy();
  });

  describe('configureButtons', () => {
    beforeEach(() => {
      app.activePage = {
        stopListening() {},

        configureButtons() {},
      };

      spyOn(app.activePage, 'stopListening');
    });

    it('should be a function', () => {
      expect(typeof app.configureButtons === 'function').toEqual(true);
    });

    it('should configure buttons for the active notification', () => {
      app.notificationHandler.activeNotification = {
        configureButtons() {},
      };

      spyOn(app.notificationHandler.activeNotification, 'configureButtons');
      app.configureButtons();

      expect(app.activePage.stopListening).toHaveBeenCalled();
      expect(app.notificationHandler.activeNotification.configureButtons).toHaveBeenCalled();
    });

    it('when there is no notification, should configure buttons for the active page', () => {
      app.notificationHandler.activeNotification = undefined;
      spyOn(app.activePage, 'configureButtons');

      app.configureButtons();
      expect(app.activePage.stopListening).toHaveBeenCalled();
      expect(app.activePage.configureButtons).toHaveBeenCalled();
    });
  });

  describe('navigate', () => {
    // TODO should this be renamed and also trigger render or init ?

    beforeEach(() => {
      spyOn(app.router, 'navigate');
    });

    it('should call navigate on the router with the route', () => {
      app.navigate('foo');
      expect(app.router.navigate).toHaveBeenCalledWith('foo', true);
    });
  });

  xdescribe('clock', () => {
    it('should start the clock');
  });
});
