const joi = require('@hapi/joi')

const schema = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
  releaseDate: joi.string().required(),
  genre: joi.array().required(),
  duration: joi.string().required(),
  rating: joi.string().required()
}).unknown(true)

const create = (body) => schema.validate(body)

module.exports = {
  create
}