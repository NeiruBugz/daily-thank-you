const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const oauth = require('./routes/oauth');
const users = require('./routes/users');
const spasibo = require('./routes/spasibo');
const app = express();
// app.listen(3000);

app.use('/', index);
app.use('/oauth', oauth);
app.use('/users', users);
app.use('/spasibo', spasibo);

app.use(logger('dev'));
app.use(bodyParser());
app.use(cookieParser());

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
