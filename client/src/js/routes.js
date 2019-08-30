const HomePage = require('./pages/homePage/homePage');
const ContactsPage = require('./pages/contactsPage/contactsPage');
const TeamPage = require('./pages/teamPage/teamPage');
const FourOhFour = require('./pages/404Page/404Page');
const MenuPage = require('./pages/menuPage/menuPage');
const MenuDetailsPage = require('./pages/menuDetailsPage/menuDetailsPage');

module.exports = {
  '/': HomePage,
  'contacts': ContactsPage,
  'team': TeamPage,
  '404': FourOhFour,
  'menuDetails': MenuDetailsPage,
  'menu': MenuPage,
};
