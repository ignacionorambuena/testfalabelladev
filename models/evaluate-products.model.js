let products = require('../data/products.json')
const filename = './data/products.json'
const helper = require('../helpers/helper.js')

function getEvaluateProducts(days) {

    //Crear reglas para los productos

    /* 
    [SellIn]
    - Indica la cantidad de días que tenemos para vender el producto
    - Disminuye 1 cuando cambia el día
    - Cuando es < 0, el precio disminuye 2
    - Cuando es == 0, el precio queda en 0

    [Price]
    - Indica costo del producto
    - Disminuye 1 cuando cambia el día
    - Nunca puede ser negativo 
    - Cuando es < 0, el precio disminuye 2
    - Nunca es mayor que 100 [!>100]
    - Queda en 0 cuando SellIn == 0

    [Full Cobertura]
    - Aumenta su precio al cambiar el día

    [Mega Cobertura]
    - No disminuye días
    - No disminuye precio
    - Tiene un precio fijo de 180

    [Super avance]
    - Disminuye su precio el doble
    

    [Full Cobertura Super Duper]
    - Aumenta su precio al cambiar el día
    - Incrementa 2 cuando quedan 10 días o menos [sellIn <=10]
    - Incrementa 3 cuando quedan 10 días o menos [sellIn <=5]


    */
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