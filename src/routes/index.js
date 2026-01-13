const express = require('express')
const router = express.Router()
const ProductRouter = require('../routes/products')
const CategoryRouter = require('../routes/category')
const UserRouter = require('../routes/users')

// Hello endpoint
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello! Welcome to the API'
  })
})

router
.use('/products', ProductRouter)
.use('/category', CategoryRouter)
.use('/users', UserRouter)


module.exports = router