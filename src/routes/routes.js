const express = require('express')
const {
  MovieController: {
    create,
    get,
    deleteMovie
  }
} = require('../controllers')

const router = express.Router()

/**
 * Genre routes go over here
 */
router.get('/movie', get)
router.post('/movie', create)
router.delete('/movie', deleteMovie)

module.exports = {
  router
}
