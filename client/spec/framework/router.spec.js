'use strict';

var Router = require('../../src/js/framework/router.js'),
  PageView = require('../../src/js/framework/page');

describe('Router', function() {

  var router;

  beforeEach(function() {
    router = new Router();
    $('body').append('<div id="watch-face" />');
  });

  describe('renderView', function() {

    var view;

    beforeEach(function() {
      view = new PageView();
    });

    describe('Loading a new view', function() {

      it('should set the current view', function() {
        router.renderView(view);
        expect(router.currentView).toEqual(view);
      });

      it('should configure the buttons', function() {
        spyOn(view, 'setButtonEvents');
        router.renderView(view);
        expect(view.setButtonEvents).toHaveBeenCalled();
      });

      describe('rendering', function () {

        it('should render the current view', function() {
          spyOn(view, 'render').and.callThrough();
          router.renderView(view);
          expect(view.render).toHaveBeenCalled();
        });

        it('should render the view in the watch face', function() {
          router.renderView(view);
          expect($('#watch-face')).toContainElement('.page');
        });

      });

    });

    describe('When there is an existing view', function() {

      var oldView;

      beforeEach(function() {
        oldView = new PageView();
        spyOn(oldView, 'remove');
      });

      it('should remove the existing view', function() {
        router.currentView = oldView;
        router.renderView(view);
        expect(oldView.remove).toHaveBeenCalled();
      });

    });

  });

  afterEach(function() {
    $('#watch-face').remove();
  });

});
