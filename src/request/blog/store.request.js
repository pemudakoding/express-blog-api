const { body } = require('express-validator')

exports.validate = () => [
  body('title').isString().exists().isLength({
    min: 5,
    max: 255
  }),
  body('slug').isString().exists().isLength({
    min: 5,
    max: 255
  }),
  body('content').isString().exists()
]