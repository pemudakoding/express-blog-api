const { validationResult } = require('express-validator')
const { unprocessable } = require('../../const/httpStatus')
const { handleResponse } = require('./resolveResponse')

const validate = (request, response) => {
  const errors = validationResult(request)

  if(! errors.isEmpty()) {
    return handleResponse(
      response,
      unprocessable,
      "Given input is invalid",
      errors.array()
    )
  }
}

module.exports = {
  validate
}