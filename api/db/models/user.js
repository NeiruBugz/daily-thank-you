const mongoose = require('./../index');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  photo: String,
  token: {
    type: String,
    required: true,
    unique: true,
    select: false
  }
});
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;