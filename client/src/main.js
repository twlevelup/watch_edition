require('./main.css');
require('./js/storage');

const App = require('watch-framework').App;

const routes = require("./js/routes");
const notifications = require("./js/notifications");

new App(routes, notifications).defineCustomElements().navigateToLocation(window.location);
