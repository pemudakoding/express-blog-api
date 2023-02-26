const { query } = require('express-validator')

exports.validate = () => [
  query('id').isInt().optional()
]