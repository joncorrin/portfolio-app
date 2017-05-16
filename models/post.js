const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  admin: {type: Schema.Types.ObjectId, ref: 'Admin'},
  content: {type: String, required: true},
  imageUrl: {type: String},
  mediaLink: {type: String},
  likes: {type: Number},
  comments: {type: Schema.ObjectId, ref: 'Comment'},
  date: {type: String}
});

module.exports = mongoose.model('Post', schema);
