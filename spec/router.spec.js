'use strict';

var Router = require('../src/js/router.js'),
  PageView = require('../src/js/framework/page'),
  HomePage = require('../src/js/views/homePage'),
  ContactPage = require('../src/js/views/contactsPage');

describe('Router', function() {

  var router;

  beforeEach(function() {
    router = new Router();
  });

  describe('The Routes', function() {

    beforeEach(function() {
      spyOn(router, 'renderView');
    });

    describe('home', function() {
      it('should load the home screen', function() {
        router.home();
        var isHomePage = router.renderView.calls.argsFor(0)[0] instanceof HomePage;
        expect(isHomePage).toBeTruthy();
      });
    });

    describe('contacts', function() {
      it('should load the contacts screen', function() {
        router.contacts();
        var isContactPage = router.renderView.calls.argsFor(0)[0] instanceof ContactPage;
        expect(isContactPage).toBeTruthy();
      });
    });

  });

  describe('renderView', function() {

    var view;

    beforeEach(function() {
      view = new PageView();
    });

    describe('Loading a new view', function() {

      it('should set the set the current view', function() {
        router.renderView(view);
        expect(router.currentView).toEqual(view);
      });

      it('should render the current view', function() {
        spyOn(view, 'render').and.callThrough();
        router.renderView(view);
        expect(view.render).toHaveBeenCalled();
      });

      it('should setup the buttons', function() {
        spyOn(view, 'setButtonEvents');
        router.renderView(view);
        expect(view.setButtonEvents).toHaveBeenCalled();
      });

      xit('should render the view in the watch face', function() {

      });

    });

    describe('When there is an existing view', function() {

      var oldView;

      beforeEach(function () {
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
