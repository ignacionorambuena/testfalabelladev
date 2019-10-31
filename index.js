const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))

//Routes
app.get('/', (req, res) => {
    res.json({ message: 'Falabella is comming...' })
})

app.listen('3000')