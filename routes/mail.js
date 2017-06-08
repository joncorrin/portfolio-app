'use strict';
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


//Email transporter for production mode
var transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: USER_ENV,
    pass: PASS_ENV'
  },
  tls: {
    rejectUnauthorized: false
  }
});

router.post('/lead', function(req, res){
  var mailOptions = {
    from: 'jon.corrin@gmail.com',
    to: 'jon.corrin@gmail.com',
    subject: req.body.subject,
    //text: req.body.text,
    html: req.body.html
  };
  console.log(mailOptions);
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }
      return console.log('Message %s sent: %s', info.messageId, info.response);
    });
});

router.post('/message', function(req,res) {
  var mailOptions = {
    from: 'jon.corrin@gmail.com',
    to: 'jon.corrin@gmail.com',
    subject: req.body.subject,
    // text: req.body.text,
    html: req.body.html
  };
  console.log(mailOptions);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    return console.log('Message %s sent: %s', info.messageId, info.response);
  });
});

router.post('/feedback', function(req,res) {
  var mailOptions = {
    from: 'jon.corrin@gmail.com',
    to: 'jon.corrin@gmail.com',
    subject: req.body.subject,
    // text: req.body.text,
    html: req.body.html
  };
  console.log(mailOptions);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    return console.log('Message %s sent: %s', info.messageId, info.response);
  });
});

module.exports = router;
