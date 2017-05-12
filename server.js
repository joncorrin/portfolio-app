const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const appRoutes = require('./routes/app');

const app = express();
const uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/db';

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connecting to: ' + uristring);
  }
});

app.set('views', path.join(__dirname, './dist'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, './dist')));

app.use(function (req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();

});

app.use('/', appRoutes);

//catch 404 and forward error handler
app.use('*', appRoutes);

app.listen(process.env.PORT || 8080);

module.exports = app;
