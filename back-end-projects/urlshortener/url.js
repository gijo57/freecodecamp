const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
  shortUrl: String,
  url: String
});

module.exports = mongoose.model('Url', urlSchema);
