const { notFound, internalError, ok } = require('../../const/httpStatus')
const { validate } = require('../../supports/http/resolveValidation')
const { handleResponse } = require('../../supports/http/resolveResponse')
const { Blog } = require('../../models')
const { matchedData } = require('express-validator')

async function handle(request, response) {

  try {
    validate(request, response)

    const data = matchedData(request)

    let blog = await Blog.findOne({
      where: {id: data.id}
    })

    if(blog instanceof Blog) {
      blog = await blog.update(data)

      return handleResponse(
        response,
        ok,
        "Success update blog",
        blog
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
      "Failed update the blog"
    )
  }
}

module.exports = {
  handle
}