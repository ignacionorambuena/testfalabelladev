const express = require('express')
const router = express.Router()
const evaluate = require('../models/evaluate-products.model')
const m = require('../helpers/middlewares')

router.get('/:days', m.mustBeInteger, async (req, res) => {
    const days = req.params.days

    await evaluate.getEvaluateProducts(days)
        .then(eva => res.json(eva))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message })
            } else {
                res.status(500).json({ message: err.message })
            }
        })
})

module.exports = router