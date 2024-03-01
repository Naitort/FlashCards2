const fs = require('fs').promises
const view = reqiure('View.js')
const path = require('path')

async function someFn(){
    const test1 = await fs.readFile(path, 'utf-8').split
}

module.exports = 