const { Router } = require('express')
const authMiddleware = require('./middlewares/authenticate')
const UserController = require('./controllers/UserController')
const ProductController= require('./controllers/ProductController')
const AuthenticationController = require('./controllers/AuthenticationController')

const routes= Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.post('/auth', AuthenticationController.store)

routes.use('/products', authMiddleware)
routes.get('/products', ProductController.index)
routes.post('/products', ProductController.store)
routes.put('/products', ProductController.update)
routes.delete('/products', ProductController.delete)

module.exports = routes
