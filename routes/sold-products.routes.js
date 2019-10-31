const express = require('express')
const router = express.Router()
const products = require('../models/products.model')
const m = require('../helpers/middlewares')

/* List sold products */
router.get('/', async (req, res) => {
    await products.getSoldProducts()
        .then(products => res.json(products))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
})

module.exports = router