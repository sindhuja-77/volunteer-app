const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  dob: String,
  location: String,
  languages: [String],
  availability: [String]
});

module.exports = mongoose.model('Volunteer', VolunteerSchema);
