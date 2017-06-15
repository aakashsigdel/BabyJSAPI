const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = Schema({
  title: {
    type: String,
    required: [true, 'BabyJS comment ko title hunu parchha']
  },
  done: Boolean,
  createdAt: Date
});

module.exports = mongoose.model('Comments', commentSchema);
