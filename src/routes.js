const { Router } = require('express')
const UserController = require('./controllers/UserController')
const AuthenticationController = require('./controllers/AuthenticationController')
const ProductController= require('./controllers/ProductController')

const authMiddleware = require('./middlewares/authenticate')

const routes= Router()

routes.get('/user', UserController.index)
routes.post('/user', UserController.store)

routes.post('/auth',AuthenticationController.store)

routes.use('/product', authMiddleware)
routes.get('/product', ProductController.index)
routes.post('/product', ProductController.store)
routes.put('/product', ProductController.update)
routes.delete('/product', ProductController.delete)

module.exports = routes
