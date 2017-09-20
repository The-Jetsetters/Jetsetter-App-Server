const express = require('express');
const path = require('path');
const cors = require('cors')
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const trips = require('./routes/trips');
const person = require('./routes/person');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/trips', trips);
app.use('/person', person);

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json('error');
});
app.listen(port)

module.exports = app;
