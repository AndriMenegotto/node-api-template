const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

const server = express()

server.use(bodyParser.json())
server.use("/", routes)

const port = 3000

server.listen(port, () => console.log(`Running in ${port}`))