function mustBeInteger(req, res, next) {
    const id = req.params.id

    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'ID must be an integer' })
    } else {
        next()
    }
}

function checkFieldsProducts(req, res, next) {
    const { nombre, sellIn, price } = req.body

    if (nombre && sellIn && price) {
        next()
    } else {
        res.status(400).json({ message: 'Los campos no son correctos' })
    }
}

function checkFieldsSellProducts(req, res, next) {
    const { id } = req.body

    if (id) {
        next()
    } else {
        res.status(400).json({ message: 'Debe contener el [ID] del producto' })
    }
}

module.exports = {
    mustBeInteger,
    checkFieldsProducts,
    checkFieldsSellProducts
}