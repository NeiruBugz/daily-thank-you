const mongoose = require('./../index');
const crypto = require('crypto');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  photo: String,
  token: {
    type: String,
    default: crypto.randomBytes(20).toString('hex'),
    required: true,
    unique: true
  },
});
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;