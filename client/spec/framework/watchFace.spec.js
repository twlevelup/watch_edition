'use strict';

var WatchFace = require('../../src/js/framework/watchFace'),
  $ = require('jquery');

describe('WatchFace', function() {

  beforeEach(function () {
    $('body').append('<div id="watch" />');
  });

  describe('rendering', function () {

    // it('should render itself automatically', function () {
    //   spyOn(WatchFace.prototype, 'initialize');
    //   // spyOn(WatchFace.prototype, 'render');
    //   this.watchFace = new WatchFace();
    //   // spyOn(this.watchFace, 'render');
    //   // this.watchFace.initialize();
    //   expect(this.watchFace.initialize).toHaveBeenCalled();
    //   // expect(this.watchFace.render).toHaveBeenCalled();
    //
    // });

    it('should render itself automatically in the #watch element', function () {

      this.watchFace = new WatchFace();
      var html = $('#watch').html();
      expect(html).toBeTruthy();

    });

  });

  afterEach(function () {
    $('#watch').remove();
  });

});
