const express = require('express');
const router = express.Router();
const path = require('path');

const Comment = require('../models/comment');

router.get('/', function(req, res, next) {
  Comment.find()
    .exec(function(err, comments){
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: comments
      });
    });
});

router.post('/', function (req, res, next) {
  const comment = new Comment({
    content: req.body.content,
    date: req.body.date,
    upvote: req.body.upvote
  });
  comment.save(function(err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    res.status(201).json({
      comment: 'Comment saved',
      obj: result
    });
  });
});

module.exports = router;
