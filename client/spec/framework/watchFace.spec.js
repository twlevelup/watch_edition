'use strict';

var WatchFace = require('../../src/js/framework/watchFace');

describe('WatchFace', function() {

  beforeEach(function () {
    $('body').append('<div id="watch" />');
  });

  describe('rendering', function () {

    var watchFace;

    it('should render itself automatically in the #watch element', function () {

      watchFace = new WatchFace();
      expect($('#watch')).toContainElement('#watch-face');

    });

  });

  afterEach(function () {
    $('#watch').remove();
  });

});
