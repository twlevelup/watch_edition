const page404 = require('./404Page');
const team = require('./TeamPage');
const home = require('./HomePage');
const contacts = require('./ContactsPage');
const eventsList = require('./eventsList');
const eventDetails = require('./eventDetails');

module.exports = {
  404: page404,
  team,
  home,
  contacts,
  eventsList,
  eventDetails,
};
