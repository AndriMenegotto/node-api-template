const httpStatus = require('http-status')

module.exports = (request, response) => {
    response.setHeader('Content-Type', 'text/plain')
    response.end(JSON.stringify({ status: httpStatus.OK, message: 'OK' }))
}