const express = require('express')
const router = express.Router()

router.use('/api/v1/products', require('./products.routes'))
router.use('/api/v1/soldproducts', require('./sold-products.routes'))
router.use('/api/v1/sellproduct', require('./sell-product.routes'))
router.use('/api/v1/evaluateproducts', require('./evaluate-products.routes'))

module.exports = router