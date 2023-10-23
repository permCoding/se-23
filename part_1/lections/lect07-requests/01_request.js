const request = require('request') // npm i request
const log = console.log

let url = 'https://pcoding.ru/csv/abiturs.json'

request.get(url, (error, response, data) => {
    if (!error && response.statusCode == 200) {
        let json = data
        // log(json)
        let arr = JSON.parse(json)
        arr
            .sort((a, b) => +a.rating - b.rating)
            .slice(0, 3)
            .forEach(element => log(element))
    }
})
