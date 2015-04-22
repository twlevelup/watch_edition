'use strict';

var HomePage = require('../../src/js/views/homePage');

describe('The Home Page', function() {

  var homePage;

  beforeEach(function () {
    homePage = new HomePage();
  });

  describe('button event handlers', function () {

    describe('right', function () {
      it('should take the user to the contacts page', function () {
        spyOn(homePage, 'goToContacts');
        homePage.setButtonEvents();
        homePage.trigger('right');
        expect(homePage.goToContacts).toHaveBeenCalled();
      });

    });

  });

});
