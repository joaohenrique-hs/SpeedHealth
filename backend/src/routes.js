const express = require('express')

const PharmacyMiddleware = require('./middlewares/PharmacyMiddleware')
const AuthMiddleware = require('./middlewares/AuthMiddleware')
const ItemMiddleware = require('./middlewares/ItemMiddleware')

const IndexController = require('./controllers/IndexController')
const PharmacyController = require('./controllers/PharmacyController')
const ItemController = require('./controllers/ItemController')

const routes = express.Router()

routes.get('/teste', IndexController.index)

routes.post('/pharmacy', PharmacyMiddleware.create(), PharmacyController.create )
routes.post('/login', PharmacyMiddleware.login(), PharmacyController.login)

routes.post('/items', ItemMiddleware.create(), AuthMiddleware, ItemController.create)

module.exports = routes