'use strict';

var WatchNotification = require('../../src/js/framework/watchNotification'),
  App = require('../../src/js/app');

var watchNotification;

global.App = App;

beforeEach(function() {
  watchNotification = new WatchNotification();
});

describe('rendering', function() {

  beforeEach(function() {
    setFixtures('<div id="watch-face" />');
  });

  it('should append itself to the view for the current page', function() {
    watchNotification.render();
    var watchFace = $('#watch-face');
    expect(watchFace).toContainElement('div');
  });

  xit('should display the message', function() {
    watchNotification.message = 'foo';
    watchNotification.render();
    var watchFace = $('#watch-face');
    expect(watchFace.text()).toContain('foo');
  });

  xit('should stop the current view from listening to events', function() {
    global.App.router.currentView = {
      stopListening: function() {}
    };
    spyOn(global.App.router.currentView, 'stopListening');
    watchNotification.render();
    expect(global.App.router.currentView.stopListening).toHaveBeenCalled();
  });

  it('should set the reconfigure the watch buttons', function() {
    spyOn(watchNotification, 'setButtonEvents');
    watchNotification.render();
    expect(watchNotification.setButtonEvents).toHaveBeenCalled();
  });

  it('should have the class watchNotification', function() {
    expect(watchNotification.className).toEqual('watchNotification');
  });

  it('should return the view object', function() {
    expect(watchNotification.render()).toEqual(watchNotification);
  });

});

describe('dismiss', function() {

  beforeEach(function() {
    global.App.router.currentView = {setButtonEvents: jasmine.createSpy()};
  });

  it('should restore the buton events for the current page', function() {
    watchNotification.dismiss();
    expect(global.App.router.currentView.setButtonEvents).toHaveBeenCalled();
  });

  it('should remove itself', function() {
    spyOn(watchNotification, 'remove');
    watchNotification.dismiss();
    expect(watchNotification.remove).toHaveBeenCalled();
  });

});
