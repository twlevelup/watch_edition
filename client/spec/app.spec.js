'use strict';

var Router = require('../src/js/router'),
  WatchFace = require('../src/js/framework/watchFace'),
  NotificationsPanel = require('../src/js/framework/notifications');

var app = require('../src/js/app');

describe('The App', function() {

  beforeEach(function() {
    setFixtures('<div id="button-right" />' +
    '<div id="button-left" />' +
    '<div id="button-top" />' +
    '<div id="button-bottom" />' +
    '<div id="watch-face" />');
    app.start();
  });

  describe('starting the app', function() {

    it('should setup the router', function() {
      expect(app.router instanceof Router).toBeTruthy();
    });

    it('should setup the watch face', function() {
      expect(app.watchFace instanceof WatchFace).toBeTruthy();
    });

    it('should setup the notifications', function() {
      expect(app.notifications instanceof NotificationsPanel).toBeTruthy();
    });
  });

  describe('navigate', function() {

    // TODO should this be renamed and also trigger render or init ?

    beforeEach(function() {
      spyOn(app.router, 'navigate');
    });

    it('should call navigate on the router with the route', function() {
      app.navigate('foo');
      expect(app.router.navigate).toHaveBeenCalledWith('foo', true);
    });

  });

  describe('responding to the button clicks', function() {

    // TODO camelcase
    // TODO rename up down left right

    beforeEach(function() {
      var CurrentView = Backbone.View.extend({
        initialize: function() {
          this.on('right', this.callright);
          this.on('left', this.callleft);
          this.on('top', this.calltop);
          this.on('bottom', this.callbottom);
          this.on('face', this.callface);
        },

        callright: jasmine.createSpy('rightButtonClickedFunction'),
        callleft: jasmine.createSpy('leftButtonClickedFunction'),
        calltop: jasmine.createSpy('topButtonClickedFunction'),
        callbottom: jasmine.createSpy('bottomButtonClickedFunction'),
        callface: jasmine.createSpy('faceButtonClickedFunction')
      });

      app.router.currentView = new CurrentView();
    });

    _.each(['right', 'top', 'bottom', 'left'], function(buttonName) {
      describe('when the user clicks the ' + buttonName, function() {
        it('should trigger the event in the current view', function() {
          $('#button-' + buttonName).trigger('click');
          expect(app.router.currentView['call' + buttonName]).toHaveBeenCalled();
        });
      });
    });

    describe('when the user clicks the face button', function() {
      it('should trigger the event in the current view', function() {
        $('#watch-face').trigger('click');
        expect(app.router.currentView.callface).toHaveBeenCalled();
      });
    });
  });

  xdescribe('clock', function() {
    it('should start the clock');
  });

});
