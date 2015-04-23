'use strict';

describe('The App', function() {

  var App;

  beforeEach(function() {
    App = require('../src/js/app');
  });

  describe('starting the app', function() {

    it('should have a start function', function() {
      expect(App.start).toBeDefined();
    });

  });

});
