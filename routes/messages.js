const express = require('express');
const router = express.Router();
const path = require('path');

const Message = require('../models/message');


router.post('/', function (req, res, next) {
  const message = new Message({
    content: req.body.content,
    date: req.body.content
  });
  message.save(function(err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    res.status(201).json({
      message: 'Message saved',
      obj: result
    });
  });
});

module.exports = router;
