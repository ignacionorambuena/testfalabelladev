let products = require('../data/products.json')
let soldProducts = require('../data/sold-products.json')
const filename = './data/products.json'
const filenameSold = './data/sold-products.json'
const helper = require('../helpers/helper.js')

function insertProcuct(newProduct) {
    return new Promise((resolve, reject) => {
        const id = { id: helper.getNewId(products) }
        newProduct = { ...id, ...newProduct }
        products.push(newProduct)
        helper.writeJSONFile(filename, products)
        resolve(newProduct)
    })
}

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

function insertSellProduct(id) {
    return new Promise((resolve, reject) => {
        const prod = helper.getNameProduct(products, id);
        if (prod.nombre !== '') {
            soldProducts.push(prod.nombre)
            helper.writeJSONFile(filenameSold, soldProducts)
            const res = {
                message: `Ha vendido un producto correctamente`,
                content: prod.nombre
            }
            resolve(res)
        } else {
            const res = {
                message: `Ocurrió un error`,
                content: `El id del producto ingresado no existe`

            }
            resolve(res)
        }
    })
}

function getSoldProducts() {
    return new Promise((resolve, reject) => {
        if (soldProducts.length === 0) {
            reject({
                message: 'No existen productos vendidos',
                status: 202
            })
        }

        resolve(soldProducts)
    })
}

module.exports = {
    insertProcuct,
    getProducts,
    getProduct,
    insertSellProduct,
    getSoldProducts,
}