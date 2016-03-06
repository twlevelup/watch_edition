'use strict';

var WatchNotification = require('../../src/js/framework/watchNotification');

window.App = require('../../src/js/app');

describe('Watch Notifications', function() {

  var watchNotification;

  beforeEach(function() {
    watchNotification = new WatchNotification({message: 'foo'});
    setFixtures('<div id="watch-face" />');
  });

  describe('Rendering', function() {

    it('should append itself to the view for the current page', function() {
      watchNotification.render();
      var watchFace = $('#watch-face');
      expect(watchFace).toContainElement('div');
    });

    it('should display the message', function() {
      watchNotification.render();
      var watchFace = $('#watch-face');
      expect(watchFace.text()).toContain('foo');
    });

    it('should have the class watchNotification', function() {
      expect(watchNotification.className).toEqual('notification');
    });

    it('should return the view object', function() {
      expect(watchNotification.render()).toEqual(watchNotification);
    });

  });

});
