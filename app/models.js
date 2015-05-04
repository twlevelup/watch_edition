var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Contact = new Schema({
  email:      { type: String },
  name:       { type: String },
  phone:      { type: String },
  gravatar:   { type: String }
});

module.exports = {
  Contact: mongoose.model('Contact', Contact)
};
