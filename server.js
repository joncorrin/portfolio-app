const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const appRoutes = require('./routes/app');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const messageRoutes = require('./routes/messages');
const commentRoutes = require('./routes/comments');
const mailRoutes = require('./routes/mail');


const app = express();
const uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'localhost:27017/portfolio';

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

app.use('/mail', mailRoutes);
app.use('/message', messageRoutes);
app.use('/user', userRoutes);
app.use('/comment', commentRoutes);
app.use('/post', postRoutes);
app.use('/', appRoutes);

//catch 404 and forward error handler
app.use('*', appRoutes);

app.listen(process.env.PORT || 8080);

module.exports = app;
