const express = require('express')
const httpStatus = require('http-status')
const healthCheck = require('./src/controllers/healthCheck')

const router = express.Router()

router.get('/health', healthCheck) 

router.get('*', function (req, res, next) {
    res.end(JSON.stringify({ status: httpStatus.NOT_FOUND, message: 'Not Found' }))
})

module.exports = router