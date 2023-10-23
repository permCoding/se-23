const request = require('request')
const { parse } = require('csv-parse') // npm i csv-parse
const log = console.log

let url = 'https://pcoding.ru/csv/abiturs.csv'

request.get(url, (error, response, data) => {
    parse(data, {columns: true, trim: true}, (err, rows) => { // columns: true => json
        
        rows.slice(1,).forEach(element => log(element))  // ver 1

        // rows.slice(1,).forEach(element => log(element.join()))  // ver 2

        rows.slice(1,)  // ver 3
            .sort((a, b) => +a[2] > +b[2]? -1: +1)
            .forEach(element => log(element[2], element[1]))
    })
})
