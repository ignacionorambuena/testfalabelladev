const express = require('express')
const router = express.Router()
const products = require('../models/products.model')
const m = require('../helpers/middlewares')

router.post('/', m.checkFieldsSellProducts, async (req, res) => {
    await products.insertSellProduct(req.body.id)
        .then(post => res.status(201).json({
            message: post.message,
            content: post.content
        }))
        .catch(err => res.status(500).json({ message: err.message }))
})

module.exports = router