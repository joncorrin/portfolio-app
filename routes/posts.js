const express = require('express');
const router = express.Router();
const path = require('path');

const Post = require('../models/post');

router.get('/', function(req, res, next) {
  Post.find()
    .exec(function(err, posts){
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: posts
      });
    });
});

router.post('/', function (req, res, next) {
  const adminPost = new Post({
    content: req.body.content,
    date: req.body.date,
    imageUrl: req.body.imageUrl,
    mediaLink: req.body.mediaLink,
    like: req.body.like
  });
  adminPost.save(function(err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    res.status(201).json({
      message: 'Post saved',
      obj: result
    });
  });
});

module.exports = router;
