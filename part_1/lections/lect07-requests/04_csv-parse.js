const fs = require('fs')
const { parse } = require('csv-parse') // npm i csv-parse
const log = console.log

let filename = "./data/abiturs.csv"

fs.readFile(filename, (err, data) => {
    let options = {columns: false, trim: true} // columns: true => json
    parse(data, options, (err, rows) => { 
        
        // log(data) // bytes

        // rows.forEach(row => log(row))
        
        rows.forEach(row => log(row.join()))

    })
})
