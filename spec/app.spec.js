var App = require('../src/js/app');

describe('The App', function () {

  var app;

  beforeEach(function () {
    app = new App();
  });

  it('should have a start function', function () {
    expect(app.start).toBeDefined();
  });

});
