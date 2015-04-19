'use strict';

var Router = require('../src/js/router.js'),
  PageView = require('../src/js/framework/page');

describe('Router', function() {

  var router;

  beforeEach(function () {
    router = new Router();
  });

  describe('The Routes', function () {

    describe('home', function () {
      xit('should load the home screen', function () {
        router.home();
      });
    });

    describe('contacts', function () {
      xit('should load the contacts screen', function () {
        router.contacts();
        expect(true).toBeTruthy();
      });
    });

  });

  describe('changeView', function () {

    var view, viewConstructor;

    beforeEach(function (){
      viewConstructor = PageView.extend({});
      view = new PageView();
    });

    describe('When there is a new view', function () {

      xit('should cache the new view', function () {
        router.changeView('a view');
        expect(router.view).toEqual('a view');
      });

      xit('should render the new view', function () {
        spyOn(view, 'render');
        router.changeView(view);
        expect(view.render).toHaveBeenCalled();
      });

    });

    describe('When there is a previous', function () {

      xit('should unbind the button events', function () {
        router.view.changeView();
      });

      xit('should remove the old view', function () {
        router.changeView();
        expect(router.view.remove).toHaveBeenCalled();
      });

    });

  });

});
