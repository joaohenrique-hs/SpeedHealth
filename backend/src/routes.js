const express = require('express')

const IndexController = require('./controllers/IndexController')

const routes = express.Router()

routes.get('/', IndexController.index)

module.exports = routes