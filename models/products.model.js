let products = require('../data/products.json')
const filename = './data/products.json'
const helper = require('../helpers/helper.js')

function getProducts() {
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

function getProduct(id) {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(products, id)
        .then(post => resolve(post))
        .catch(err => reject(err))
    })
}

function insertProcuct(newProduct) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(products) }
        newProduct = { ...id, ...newProduct }
        products.push(newProduct)
        helper.writeJSONFile(filename, products)
        resolve(newProduct)
    })
}

module.exports = {
    insertProcuct,
    getProducts,
    getProduct,
}