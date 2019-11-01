let products = require('../data/products.json')
const filename = './data/products.json'
const helper = require('../helpers/helper.js')

function getEvaluateProducts(days) {
    const data = [];
    let temp = [];
    for (let i = 0; i < parseInt(days); i++) {
        if (temp.length === 0) {
            console.log('------- dia ', i, '------');
            console.log('id, nombre, sellIn, price');
            products.map(prd => {
                switch (prd.id) {
                    case 1: // Cobertura
                        temp.push({
                            id: prd.id,
                            nombre: prd.nombre,
                            sellIn: prd.sellIn - 1,
                            price: prd.sellIn == 0 ? 0 : prd.sellIn < 0 ? prd.price == 0 ? 0 : prd.price - 2 : prd.price - 1
                        });

                        console.log(prd.id, ',', prd.nombre, ',', prd.sellIn - 1, ',', prd.sellIn == 0 ? 0 : prd.sellIn < 0 ? prd.price == 0 ? 0 : prd.price - 2 : prd.price - 1);
                        break;
                    case 2: // Full cobertura
                        temp.push({
                            id: prd.id,
                            nombre: prd.nombre,
                            sellIn: prd.sellIn - 1,
                            price: prd.sellIn == 0 ? 0 : prd.sellIn < 0 ? prd.price == 0 ? 0 : prd.price - 2 : prd.price >= 100 ? 100 : prd.price + 1
                        });
                        console.log(prd.id, ',', prd.nombre, ',', prd.sellIn - 1, ',', prd.sellIn == 0 ? 0 : prd.sellIn < 0 ? prd.price == 0 ? 0 : prd.price - 2 : prd.price >= 100 ? 100 : prd.price + 1);
                        break;
                    case 3: // Baja Cobertura
                        temp.push({
                            id: prd.id,
                            nombre: prd.nombre,
                            sellIn: prd.sellIn - 1,
                            price: prd.sellIn == 0 ? 0 : prd.sellIn < 0 ? prd.price == 0 ? 0 : prd.price - 2 : prd.price - 1
                        });

                        console.log(prd.id, ',', prd.nombre, ',', prd.sellIn - 1, ',', prd.sellIn == 0 ? 0 : prd.sellIn < 0 ? prd.price == 0 ? 0 : prd.price - 2 : prd.price - 1);
                        break;
                    case 4: // Mega Cobertura
                        temp.push({
                            id: prd.id,
                            nombre: prd.nombre,
                            sellIn: prd.sellIn,
                            price: 180
                        });
                        console.log(prd.id, ',', prd.nombre, ',', prd.sellIn, ',', 180);
                        break;
                    case 5: // Full cobertura super duper
                        temp.push({
                            id: prd.id,
                            nombre: prd.nombre,
                            sellIn: prd.sellIn - 1,
                            price: prd.sellIn <= 10 && prd.sellIn > 5 && prd.price < 100 ? prd.price + 2 : prd.sellIn <= 5 && prd.sellIn > 0 && prd.price <= 100 ? prd.price + 3 : prd.sellIn == 0 ? 0 : prd.sellIn < 0 ? 0 : prd.price >= 100 ? 100 : prd.price + 1
                        });
                        console.log(prd.id, ',', prd.nombre, ',', prd.sellIn - 1, ',', prd.sellIn <= 10 && prd.sellIn >= 5 && prd.price <= 100 ? prd.price + 2 : prd.sellIn < 5 && prd.sellIn > 0 && prd.price < 100 ? prd.price + 3 : prd.sellIn == 0 ? 0 : prd.sellIn < 0 ? 0 : prd.price >= 100 ? 100 : prd.price + 1);
                        break;
                    case 6: // Super avance
                        temp.push({
                            id: prd.id,
                            nombre: prd.nombre,
                            sellIn: prd.sellIn - 1,
                            price: prd.price <= 0 ? 0 : prd.price - 2
                        });
                        console.log(prd.id, ',', prd.nombre, ',', prd.sellIn, ',', prd.price <= 0 ? 0 : prd.price - 2);
                        break;
                }
            });
        } else {
            console.log('------- dia ', i, '------');
            console.log('id, nombre, sellIn, price');
            temp.map(function (prd, idx) {
                switch (prd.id) {
                    case 1: // Cobertura
                        temp[idx] = {
                            id: prd.id,
                            nombre: prd.nombre,
                            sellIn: prd.sellIn - 1,
                            price: prd.sellIn == 0 ? 0 : prd.sellIn < 0 ? prd.price == 0 ? 0 : prd.price - 2 : prd.price - 1
                        };
                        console.log(prd.id, ',', prd.nombre, ',', prd.sellIn - 1, ',', prd.sellIn == 0 ? 0 : prd.sellIn < 0 ? prd.price == 0 ? 0 : prd.price - 2 : prd.price - 1);
                        break;
                    case 2: // Full cobertura
                        temp[idx] = {
                            id: prd.id,
                            nombre: prd.nombre,
                            sellIn: prd.sellIn - 1,
                            price: prd.sellIn == 0 ? 0 : prd.sellIn < 0 ? prd.price == 0 ? 0 : prd.price - 2 : prd.price >= 100 ? 100 : prd.price + 1
                        };
                        console.log(prd.id, ',', prd.nombre, ',', prd.sellIn - 1, ',', prd.sellIn == 0 ? 0 : prd.sellIn < 0 ? prd.price == 0 ? 0 : prd.price - 2 : prd.price >= 100 ? 100 : prd.price + 1);
                        break;
                    case 3: // Baja Cobertura
                        temp[idx] = {
                            id: prd.id,
                            nombre: prd.nombre,
                            sellIn: prd.sellIn - 1,
                            price: prd.sellIn == 0 ? 0 : prd.sellIn < 0 ? prd.price == 0 ? 0 : prd.price - 2 : prd.price - 1
                        };
                        console.log(prd.id, ',', prd.nombre, ',', prd.sellIn - 1, ',', prd.sellIn == 0 ? 0 : prd.sellIn < 0 ? prd.price == 0 ? 0 : prd.price - 2 : prd.price - 1);
                        break;
                    case 4: // Mega Cobertura
                        temp[idx] = {
                            id: prd.id,
                            nombre: prd.nombre,
                            sellIn: prd.sellIn,
                            price: 180
                        };
                        console.log(prd.id, ',', prd.nombre, ',', prd.sellIn, ',', 180);
                        break;
                    case 5: // Full cobertura super duper
                        temp[idx] = {
                            id: prd.id,
                            nombre: prd.nombre,
                            sellIn: prd.sellIn - 1,
                            price: prd.sellIn <= 10 && prd.sellIn >= 5 && prd.price < 100 ? prd.price + 2 : prd.sellIn <= 5 && prd.sellIn > 0 && prd.price <= 100 ? prd.price + 3 : prd.sellIn == 0 ? 0 : prd.sellIn < 0 ? 0 : prd.price >= 100 ? 100 : prd.price + 1
                        };
                        console.log(prd.id, ',', prd.nombre, ',', prd.sellIn - 1, ',', prd.sellIn <= 10 && prd.sellIn >= 5 && prd.price <= 100 ? prd.price + 2 : prd.sellIn < 5 && prd.sellIn > 0 && prd.price < 100 ? prd.price + 3 : prd.sellIn == 0 ? 0 : prd.sellIn < 0 ? 0 : prd.price >= 100 ? 100 : prd.price + 1);
                        break;
                    case 6: // Super avance
                        temp[idx] = {
                            id: prd.id,
                            nombre: prd.nombre,
                            sellIn: prd.sellIn - 1,
                            price: prd.price <= 0 ? 0 : prd.price - 2
                        };
                        console.log(prd.id, ',', prd.nombre, ',', prd.sellIn, ',', prd.price <= 0 ? 0 : prd.price - 2);
                        break;
                }
            });
        }
    }

    return new Promise((resolve, reject) => {
        if (products.length === 0) {
            reject({
                message: 'No existen productos',
                status: 202
            })
        }

        resolve('Imprimiendo resultado en logs')
    })
}

module.exports = {
    getEvaluateProducts
}