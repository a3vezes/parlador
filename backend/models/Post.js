const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  text: {
    type: String,
    required: [true, 'Please add a text'],
    maxlength: 280,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Post', PostSchema);
