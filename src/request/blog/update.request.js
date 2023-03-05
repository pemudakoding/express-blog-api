const { body } = require('express-validator')

exports.validate = () => [
  body('id').isInt().exists(),
  body('title').isString().optional().isLength({
    min: 5,
    max: 255
  }),
  body('slug').isString().optional().isLength({
    min: 5,
    max: 255
  }),
  body('content').optional().exists()
]