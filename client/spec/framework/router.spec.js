'use strict';

var Router = require('../../src/js/framework/router'),
  PageView = require('../../src/js/framework/page');

// TODO figure out how to test routes using navigate

xdescribe('Router', function() {

  var router;

  describe('Routes and pages', function() {

    var pages;

    describe('when a home page is provided', function() {

      beforeEach(function() {
        pages = {
          home: 'home'
        };
        router = new Router(pages);
        spyOn(router, 'renderPage');
      });

      it('should create the route "" for the home page', function() {
        expect(router.renderPage).toHaveBeenCalledWith('home');
      });

    });

    describe('when additional pages are provided', function() {

      beforeEach(function() {
        pages = {
          home: 'home',
          contacts: 'contacts'
        };
        router = new Router(pages);
        spyOn(router, 'renderPage');
      });

      it('should create a route with the same name as the page', function() {
        expect(router.renderPage).toHaveBeenCalledWith('contacts');
      });
    });
  });

  describe('renderPage', function() {

    var view;

    beforeEach(function() {
      setFixtures('<div id="watch-face" />');
      router = new Router();
      view = new PageView();
    });

    describe('Loading a new view', function() {

      it('should set the current view', function() {
        router.renderPage(view);
        expect(router.activePage).toEqual(view);
      });

      it('should configure the buttons', function() {
        spyOn(view, 'setButtonEvents');
        router.renderPage(view);
        expect(view.setButtonEvents).toHaveBeenCalled();
      });

      describe('rendering', function() {

        it('should render the current view', function() {
          spyOn(view, 'render').and.callThrough();
          router.renderPage(view);
          expect(view.render).toHaveBeenCalled();
        });

        it('should render the view in the watch face', function() {
          router.renderPage(view);
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
        router.activePage = oldView;
        router.renderPage(view);
        expect(oldView.remove).toHaveBeenCalled();
      });

    });

  });

});
