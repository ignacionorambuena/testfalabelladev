let products = require('../data/products.json')
const filename = './data/products.json'
const helper = require('../helpers/helper.js')

function getEvaluateProducts(days) {

    //Crear reglas para los productos
    
    return new Promise((resolve, reject) => {
        if (products.length === 0) {
            reject({
                message: 'No existen productos',
                status: 202
            })
        }

        resolve(products)
    })
}

module.exports = {
    getEvaluateProducts
}