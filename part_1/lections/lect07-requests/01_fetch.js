const log = console.log

let url = 'https://pcoding.ru/csv/abiturs.json'

fetch(url)
    .then(res => res.json())
    .then(json => {
        // log(json)
        json
            .sort((a, b) => a.rating > b.rating? -1: +1)
            .slice(0, 3)
            .map(x => { 
                x.gender = x.gender == 1? 'male': 'female'
                return x
            })
            .forEach(element => log(element))
    })
