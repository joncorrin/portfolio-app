const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {type: String, required: true},
  email: {type: String},
  comments: {type: Schema.ObjectId, ref: 'Comment'},
  messages: {type: Schema.ObjectId, ref: 'Message'}
});

module.exports = mongoose.model('Visitor', schema);
