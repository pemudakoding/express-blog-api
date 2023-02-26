
const { created, internalError } = require('../../const/httpStatus')
const { validate } = require('../../supports/http/resolveValidation')
const { handleResponse } = require('../../supports/http/resolveResponse')
const { Blog } = require('../../models')

async function handle(request, response) {
  validate(request, response)

  const blog = await Blog.create(request.body)

  if(blog instanceof Blog) {
    return handleResponse(
      response,
      created,
      'success created blog',
      blog
    )
  }

  return handleResponse(
    response,
    internalError,
    'fail create blog',

  )
}

module.exports = {
  handle
}