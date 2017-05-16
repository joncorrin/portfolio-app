const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  content: {type: String, required: true},
  upvotes: {type: Number},
  visitor: {type: Schema.ObjectId, ref: 'Visitor'},
  admin: {type: Schema.ObjectId, ref: 'Admin'},
  date: {type: String}
});

module.exports = mongoose.model('Comment', schema);
