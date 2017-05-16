const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  passwordConfirmation: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  bio: {type: String, required: true},
  numberOfProjects: {type: Number},
  posts: {type: Schema.ObjectId, ref: 'Post'},
  numberOfPosts: {type: Number},
  comments: {type: Schema.ObjectId, ref: 'Comment'},
  messages: {type: Schema.ObjectId, ref: 'Message'}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Admin', schema);
