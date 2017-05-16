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

router.patch('/:id', function (req, res, next) {
  Post.findById(req.params.id, function (err, message) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!post) {
      return res.status(500).json({
        title: 'No Post Found!',
        error: {message: 'Post not found'}
      });
    }
    post.content = req.body.content;
    post.date = req.body.date;
    post.save(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Updated post',
        obj: result
      });
    });
  });
});

router.delete('/:id', function(req, res, next) {
  Post.findById(req.params.id, function (err, message) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!post) {
      return res.status(500).json({
        title: 'No Post Found!',
        error: {post: 'Post not found'}
      });
    }
    post.remove(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Deleted post',
        obj: result
      });
    });
  });
});

module.exports = router;
