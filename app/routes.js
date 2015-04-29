var home = require('../controllers/home'),
  contacts = require('../controllers/contacts');

module.exports.initialize = function(app) {
  app.get('/', home.index);
  app.get('/api/contacts', contacts.index);
  app.get('/api/contacts/:id', contacts.getById);
  app.post('/api/contacts', contacts.add);
  app.delete('/api/contacts/:id', contacts.delete);
};
