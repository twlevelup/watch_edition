'use strict';

var clock = require('../../src/js/framework/clock.js');

beforeEach(function() {
  // year, month, day, hour, minutes, seconds
  this.now = new Date(2015, 1, 2, 3, 4, 5);
  this.otherTime = new Date(2014, 0, 12, 12, 11, 10);

  setFixtures('<div class="clock-date" /><div class="clock-time" /><div class="clock-date-time" />');

});

describe('displaying the date', function() {

  describe('when it\'s Monday February 2 2015', function() {

    it('should display the date', function() {
      clock.displayDateTime(this.now);
      var expectedOutput = 'Monday February 2 2015';
      expect($('.clock-date').text()).toEqual(expectedOutput);
    });

  });

  describe('when it\'s Sunday January 12 2014', function() {

    it('should display the date', function() {
      clock.displayDateTime(this.otherTime);
      var expectedOutput = 'Sunday January 12 2014';
      expect($('.clock-date').text()).toEqual(expectedOutput);
    });

  });

});

describe('displaying the time', function() {
  describe('when it\'s 03:04:0s', function() {
    it('should display the time', function() {
      clock.displayDateTime(this.now);
      var expectedOutput = '03:04:05';
      expect($('.clock-time').text()).toEqual(expectedOutput);
    });
  });

  describe('when it\'s 12:11:10s', function() {
    it('should display the time', function() {
      clock.displayDateTime(this.otherTime);
      var expectedOutput = '12:11:10';
      expect($('.clock-time').text()).toEqual(expectedOutput);
    });
  });
});

describe('displaying the date and time', function() {
  it('should display the date and time', function() {
    clock.displayDateTime(this.now);
    var expectedOutput = 'Monday February 2 2015 03:04:05';
    expect($('.clock-date-time').text()).toEqual(expectedOutput);
  });
});
