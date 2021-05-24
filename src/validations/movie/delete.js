const joi = require('@hapi/joi')

const schema = joi.object({
  name: joi.string().required()
})

const deleteMovie = (body) => schema.validate(body)

module.exports = {
  deleteMovie
}
