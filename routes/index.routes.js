const express = require('express')
const router = express.Router()

router.use('/api/v1/products', require('./products.routes'))

module.exports = router