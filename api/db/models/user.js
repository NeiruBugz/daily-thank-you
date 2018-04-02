const mongoose = require('./../index');
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
});
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;