'use strict';

var Router = require('../src/js/router.js');

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
      });
    });

  });

  describe('changeView', function () {

    beforeEach(function (){
      router.view = {
        remove: jasmine.createSpy(),
        render: jasmine.createSpy()
      };
    });

    xit('should unbind the button events', function () {
      router.changeView();
    });

    xit('should cache the new view', function () {
      router.changeView('a view');
      expect(router.view).toEqual('a view');
    });

    xit('should remove the old view', function () {
      router.changeView();
      expect(router.view.remove).toHaveBeenCalled();
    });

    xit('should render the new view', function () {
      router.changeView();
      expect(router.view.render).toHaveBeenCalled();
    });

  });

});
