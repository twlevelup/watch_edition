const HomePage = require('./pages/homePage');
const ContactsPage = require('./pages/ContactsPage/');
const TeamPage = require('./pages/teamPage');
const FourOhFour = require('./pages/404Page');

module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
};
