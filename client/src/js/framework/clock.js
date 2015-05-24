'use strict';

var clock = {};

clock.months = ['January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December'];

clock.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

clock.displayDateTime = function(date) {

  date = date || new Date();

  var year = date.getFullYear(),
      month = date.getMonth(),
      d = date.getDate(),
      day = date.getDay();

  var h = date.getHours(),
      m = date.getMinutes(),
      s = date.getSeconds();

  if (h < 10) {
    h = '0' + h;
  }

  if (m < 10) {
    m = '0' + m;
  }

  if (s < 10) {
    s = '0' + s;
  }

  var sDate = [clock.days[day], clock.months[month], d, year].join(' '),
    sTime =  [h, m, s].join(':'),
    sDateTime = sDate + ' ' + sTime;

  global.$('.clock-date-time').html(sDateTime);
  global.$('.clock-date').html(sDate);
  global.$('.clock-time').html(sTime);

};

clock.start = function() {
  setInterval(clock.displayDateTime, 1000);
};

module.exports = clock;
