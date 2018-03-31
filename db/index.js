const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/daily-spasibo');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // connect success
});
module.exports = mongoose;