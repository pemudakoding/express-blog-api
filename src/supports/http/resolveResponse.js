const handleResponse = (response, status, message, data = []) => {
  return response.status(status).json({
    message,
    code: status,
    data
  })
}

module.exports = {
  handleResponse
}