const { notFound, internalError, ok } = require('../../const/httpStatus')
const { validate } = require('../../supports/http/resolveValidation')
const { handleResponse } = require('../../supports/http/resolveResponse')
const { Blog } = require('../../models')

async function handle(request, response) {

  try {
    validate(request, response)

    const blog = await Blog.findOne({
      where: {id: request.query.id}
    })

    if(blog instanceof Blog) {
      await blog.destroy()

      return handleResponse(
        response,
        ok,
        "Success delete blog"
      )
    }

    return handleResponse(
      response,
      notFound,
      "blog with that id doesn't exists"
    )
  } catch (error) {
    return handleResponse(
      response,
      internalError,
      "Failed destroy the blog"
    )
  }
}

module.exports = {
  handle
}