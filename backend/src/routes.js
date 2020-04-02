const express = require('express')

const PharmacyMiddleware = require('./middlewares/PharmacyMiddleware')
const AuthMiddleware = require('./middlewares/AuthMiddleware')
const ItemMiddleware = require('./middlewares/ItemMiddleware')
const UserMiddleware = require('./middlewares/UserMiddleware')

const IndexController = require('./controllers/IndexController')
const PharmacyController = require('./controllers/PharmacyController')
const ItemController = require('./controllers/ItemController')
const UserController = require('./controllers/UserController')

const routes = express.Router()

routes.get('/teste', IndexController.index)

routes.post('/pharmacy', PharmacyMiddleware.create(), PharmacyController.create )
routes.post('/login', PharmacyMiddleware.login(), PharmacyController.login)

routes.post('/items', ItemMiddleware.create(), AuthMiddleware, ItemController.create)
routes.put('/items/:id', ItemMiddleware.modify(), AuthMiddleware, ItemController.modify)
routes.get('/items', ItemMiddleware.index(), AuthMiddleware, ItemController.index)
routes.delete('/items/:id', ItemMiddleware.delete(), AuthMiddleware, ItemController.delete)

routes.post('/register', UserMiddleware.create(), UserController.create)
routes.post('/session', UserMiddleware.session(), UserController.session)

module.exports = routes