const App = require('watch-framework').App;

const routes = require("./js/routes");
const notifications = require("./js/notifications");

new App(routes, notifications).navigateToLocation(window.location);
