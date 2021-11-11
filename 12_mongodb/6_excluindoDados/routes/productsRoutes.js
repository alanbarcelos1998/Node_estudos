const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

router.get('/products/create', ProductController.createProduct)
router.post('/products/create', ProductController.createProductPost)
router.post('/remove/:id', ProductController.removeProduct)
router.get('/products/:id', ProductController.getProduct)
router.get('/', ProductController.showProducts)

module.exports = router