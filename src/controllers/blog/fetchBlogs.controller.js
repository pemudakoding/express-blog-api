const { handleResponse } = require('../../supports/http/resolveResponse')
const { ok, internalError, notFound } = require('../../const/httpStatus')
const { validate } = require('../../supports/http/resolveValidation')
const { Blog } = require('../../models')

async function handle(request, response) {

  try {
    validate(request, response)

    const blog = await Blog.findOne({
      where: {id: request.query.id}
    })

    if(blog instanceof Blog) {
      return handleResponse(
        response,
        ok,
        "Success fetch all blogs",
        blog
      )
    }

    return handleResponse(
      response,
      notFound,
      "blog with that id doesn't exists",
    )
  } catch (error) {
    return handleResponse(
      response,
      internalError,
      "Failed fetch all blogs",
    )
  }
}

module.exports = {
  handle
}