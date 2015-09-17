'use strict';

var NotificationView = require('../../src/js/framework/notification'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app');

var notification;

global.App = App;

beforeEach(function() {
  notification = new NotificationView();
});

describe('rendering', function() {

  beforeEach(function() {
    setFixtures('<div id="watch-face" />');
  });

  it('should append itself to the view for the current page', function() {
    notification.render();
    var watchFace = $('#watch-face');
    expect(watchFace).toContainElement('div');
  });

  xit('should display the message', function() {
    notification.message = 'foo';
    notification.render();
    var watchFace = $('#watch-face');
    expect(watchFace.text()).toContain('foo');
  });

  it('should stop the current view from listening to events', function () {
    global.App.router.currentView = {
      stopListening: function () {}
    };
    spyOn(global.App.router.currentView, 'stopListening');
    notification.render();
    expect(global.App.router.currentView.stopListening).toHaveBeenCalled();
  });

  it('should set the reconfigure the watch buttons', function() {
    spyOn(notification, 'setButtonEvents');
    notification.render();
    expect(notification.setButtonEvents).toHaveBeenCalled();
  });

  it('should have the class notification', function() {
    expect(notification.className).toEqual('notification');
  });

  it('should return the view object', function() {
    expect(notification.render()).toEqual(notification);
  });

});

describe('dismiss', function() {

  beforeEach(function() {
    global.App.router.currentView = {setButtonEvents: jasmine.createSpy()};
  });

  it('should restore the buton events for the current page', function() {
    notification.dismiss();
    expect(global.App.router.currentView.setButtonEvents).toHaveBeenCalled();
  });

  it('should remove itself', function() {
    spyOn(notification, 'remove');
    notification.dismiss();
    expect(notification.remove).toHaveBeenCalled();
  });

});
