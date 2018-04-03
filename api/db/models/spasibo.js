const mongoose = require('./../index');
const spasiboSchema = mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});
const SpasiboModel = mongoose.model('Spasibo', spasiboSchema);

module.exports = SpasiboModel;