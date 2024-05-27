const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  score: { type: Number, min: 0, max: 100, required: true },
  comment: { type: String, required: true }
});

module.exports = mongoose.model('Review', ReviewSchema);
