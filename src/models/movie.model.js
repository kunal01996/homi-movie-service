const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
  name: { type: String },
  description: {type: String},
  releaseDate: {type: Date},
  genre: { type: Array },
  duration: {type: String},
  rating: {type: String}
}, {
  timestamps: true
})

const Movie = mongoose.model('movies', MovieSchema)

module.exports = {
  Movie
}
