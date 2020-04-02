const express = require('express')

const PharmacyMiddleware = require('./middlewares/PharmacyMiddleware')

const IndexController = require('./controllers/IndexController')
const PharmacyController = require('./controllers/PharmacyController')

const routes = express.Router()

routes.get('/teste', IndexController.index)

routes.post('/pharmacy', PharmacyMiddleware.create(), PharmacyController.create )
routes.post('/login', PharmacyMiddleware.login(), PharmacyController.login)

module.exports = routes