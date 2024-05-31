const mongoose = require('mongoose');
const { Schema } = require('mongoose')


const Actor= new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  alive: { type: Boolean, required: true },
  headshot: {type: String, required: true},  
  movie: {type: Schema.Types.ObjectId, ref: 'movie_id'},
},
{ timestamps: true},
);

module.exports = mongoose.model('Actor', Actor);




