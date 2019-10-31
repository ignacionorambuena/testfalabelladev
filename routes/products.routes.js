const express = require('express')
const router = express.Router()
const products = require('../models/products.model')
const m = require('../helpers/middlewares')

/* All products */
router.get('/', async (req, res) => {
    await products.getProducts()
    .then(products => res.json(products))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* A product by id */
router.get('/:id', m.mustBeInteger, async (req, res) => {
    const id = req.params.id

    await products.getProduct(id)
    .then(post => res.json(post))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* Insert a new product */
router.post('/', m.checkFieldsProducts, async (req, res) => {
    await products.insertProducts(req.body)
    .then(post => res.status(201).json({
        message: `El producto #${products.id} fue creado correctamente`,
        content: post
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})

module.exports = router