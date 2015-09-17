'use strict';

var Router = require('../../src/js/framework/router.js'),
  PageView = require('../../src/js/framework/page');

describe('Router', function() {

  var router;

  xdescribe('Routes and pages', function () {

    describe('when a home page is provided', function () {

      var pages, homePage;

      beforeEach(function() {
        pages = {
          home: 'foo'
        };
        router = new Router(pages);
        spyOn(router, 'renderView');
      });

      it('should create the "" route for the home page', function () {
        router.navigate('');
        expect(router.renderView).toHaveBeenCalledWith('foo');
      });

      describe('when additional pages are provided', function () {

        beforeEach(function() {
          pages = {
            home: 'foo',
            contacts: 'contacts',
          };
          router = new Router(pages);
          spyOn(router, 'renderView');
        });

        it('should create a route with the same name as the page', function () {
          router.navigate('contacts');
          expect(router.renderView).toHaveBeenCalledWith('contacts');
        });
      });
    });
  });

  describe('renderView', function() {

    var view;

    beforeEach(function() {
      setFixtures('<div id="watch-face" />');
      router = new Router();
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

      describe('rendering', function() {

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

});
