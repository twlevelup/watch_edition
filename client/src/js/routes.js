const HomePage = require('./pages/homePage');
const ContactsPage = require('./pages/contactsPage');
const TeamPage = require('./pages/teamPage');

module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'team': TeamPage
};
