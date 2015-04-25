'use strict';

var Page = require('../../src/js/framework/page');

describe('A generic page', function() {

  var page;

  beforeEach(function () {
    page = new Page();
  });

  it('should have the class "page"', function () {

    expect(page.className).toEqual('page');

  });

});
