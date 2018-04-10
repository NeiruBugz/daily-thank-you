const mongoose = require('mongoose');
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_DB}`);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

String.prototype.toObjectId = function() {
  const ObjectId = (mongoose.Types.ObjectId);
  return new ObjectId(this.toString());
};

module.exports = mongoose;