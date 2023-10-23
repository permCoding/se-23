const request = require('request')
const log = console.log
const url = 'https://pcoding.ru/csv/abiturs.json'

const print_list = (arr) => {
    arr
        .sort((a, b) => +a.rating > b.rating? -1: +1)
        .slice(0, 5)
        .forEach(element => log(element))
}

request.get(url, (error, response, data) => {
    if (!error && response.statusCode == 200) {
        print_list(JSON.parse(data))
    } else {
        log(error)
    }
})
