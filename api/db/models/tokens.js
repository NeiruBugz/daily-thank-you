const mongoose = require('./../index');

const tokenSchema = mongoose.Schema({
  token: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true,
    default: true
  }
});
const TokenModel = mongoose.model('Token', tokenSchema);

module.exports = TokenModel;