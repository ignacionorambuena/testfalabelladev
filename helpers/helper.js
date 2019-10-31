const fs = require('fs')

const getNewId = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
}

function mustBeInArray(array, id) {
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id == id)
        if (!row) {
            reject({
                message: 'ID no es válido',
                status: 404
            })
        }
        resolve(row)
    })
}

function getNameProduct(array, id) {
    const row = array.find(r => r.id == id)
    if (row !== undefined) {
        return row;
    } else {
        return false;
    }
}

function writeJSONFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}

module.exports = {
    getNewId,
    mustBeInArray,
    writeJSONFile,
    getNameProduct
}