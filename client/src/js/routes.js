const HomePage = require('./pages/HomePage');
const ContactsPage = require('./pages/ContactsPage/');
const TeamPage = require('./pages/TeamPage');
const FourOhFour = require('./pages/404Page');

module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
};
