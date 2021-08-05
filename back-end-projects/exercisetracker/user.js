const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String
});

userSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    delete ret.__v;
    return ret;
  }
});

module.exports = mongoose.model('User', userSchema);
