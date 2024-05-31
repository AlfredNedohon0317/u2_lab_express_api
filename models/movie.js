const mongoose = require('mongoose');
const { Schema } = require('mongoose')



const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  runtime: { type: Number, required: true },
  rating: { type: String, required: true },
  yearReleased: { type: Number, required: true },
  description: { type: String, required: true },
  poster: { type: String },
  genre: {type: String, required: true},
});

module.exports = mongoose.model('Movie', MovieSchema);




