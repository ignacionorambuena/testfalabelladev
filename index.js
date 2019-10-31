const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))
app.use(require('./routes/sold-products.routes'))
app.use(require('./routes/sell-product.routes'))

//Routes
app.get('/', (req, res) => {
    res.json({ message: 'Falabella is comming...' })
})

app.listen('3000')