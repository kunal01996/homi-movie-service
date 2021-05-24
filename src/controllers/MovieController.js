const {
  MovieModel: { Movie }
} = require('../models')
const {
  CreateMovie,
  DeleteMovie
} = require('../validations')

const get = async (req, res) => {
  try {
    const filter = {};
    if (req.params && req.params.name) {
      filter.name = req.params.name
    }
    const movies = await Movie.find(filter);
    return res.status(200)
      .json({
        status: 200,
        message: movies
      })
  }
  catch (error) {
    return res.status(500).json({
      status: 500,
      message: error
    })
  }
}

const create = async (req, res) => {
  try {
    const validations = CreateMovie.create(req.body)
    if (!validations.error) {
      const NewMovie = await Movie.create({
        name: req.body.name,
        description: req.body.description,
        releaseDate: new Date(req.body.releaseDate),
        genre: req.body.genre,
        duration: req.body.duration,
        rating: req.body.rating
      });
      return res.status(201).json({
        status: 201,
        message: {
          genre: NewMovie
        }
      })
    } else {
      return res.status(200).json({
        status: 400,
        message: validations.error.details
      })
    }
  }
  catch (error) {
    console.log('error', error)
    return res.status(500).json({
      status: 500,
      message: error
    })
  }
}

const deleteMovie = async (req, res) => {
  try {
    const validations = DeleteMovie.deleteMovie(req.query)
    if (!validations.error) {
      await Movie.deleteOne({ name: req.query.name });
      return res.status(200)
        .json({
          status: 200,
          message: 'Record deleted.'
        })

    } else {
      return res.status(200).json({
        status: 400,
        message: validations.error.details
      })
    }
  }
  catch (error) {
    return res.status(500).json({
      status: 500,
      message: error
    })
  }
}

module.exports = {
  create,
  get,
  deleteMovie
}