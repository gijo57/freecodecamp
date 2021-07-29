const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
  shortUrl: Number,
  url: String
});

module.exports = mongoose.model('Url', urlSchema);
