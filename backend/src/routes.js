const express = require('express')

const IndexController = require('./controllers/IndexController')

const routes = express.Router()

routes.get('/teste', IndexController.index)

module.exports = routes