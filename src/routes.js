const express = require('express')
const httpStatus = require('http-status')
const healthCheck = require('./controllers/healthCheck')

const router = express.Router()

router.get('/health', healthCheck) 

router.get('*', function (req, res) {
    res.sendStatus(httpStatus.NOT_FOUND)
})

module.exports = router