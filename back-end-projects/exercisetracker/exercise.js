const mongoose = require('mongoose');
const { Schema } = mongoose;

const exerciseSchema = new Schema({
  userId: Object,
  description: String,
  duration: Number,
  date: Date
});

module.exports = mongoose.model('Exercise', exerciseSchema);
