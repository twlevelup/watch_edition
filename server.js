var express = require('express'),
  http = require('http'),
  path = require('path'),
  routes = require('./app/routes'),
  mongoose = require('mongoose'),
  seeder = require('./app/seeder'),
  app = express();

app.set('port', process.env.PORT || 3300);
app.use(express.static(__dirname + '/public'));

//connect to the db server:
mongoose.connect('mongodb://localhost/MyApp');
mongoose.connection.on('open', function() {
  console.log("Connected to Mongoose...");

  // check if the db is empty, if so seed it with some contacts:
  seeder.check();
});

//routes list:
routes.initialize(app);

//finally boot up the server:
http.createServer(app).listen(app.get('port'), function() {
  console.log('Server up: http://localhost:' + app.get('port'));
});
