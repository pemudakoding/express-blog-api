async function handle(request, response) {
  response.json({name: 'rendered'})
}

module.exports = {
  handle
}