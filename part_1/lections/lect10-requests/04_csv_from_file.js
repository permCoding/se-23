const fs = require('fs')
const { parse } = require('csv-parse') // npm i csv-parse
const log = console.log

let filename = "./data/abiturs.csv"

fs.readFile(filename, (err, data) => {
    parse(data, {columns: false, trim: true}, (err, rows) => { // columns: true => json
        // log(data)
        rows.forEach(element => {
            log(element.join())
        })
    })
})
