const express = require('express')

const IndexController = require('./controllers/IndexController')
const PharmacyController = require('./controllers/PharmacyController')

const routes = express.Router()

routes.get('/teste', IndexController.index)

routes.post('/pharmacy', PharmacyController.create)

module.exports = routes