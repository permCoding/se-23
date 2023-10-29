const data = require("./data/data.js")
const { clients } = require("./data/clients.json")
const log = console.log


// log(clients[0])

// let str = JSON.stringify(clients, null, 4)
// log(str)
// log(JSON.parse(str))

clients
    .map(ob => {
        return { 
            "name": ob.name, 
            "address": ob.address, 
            "age": ob.age, 
            "gender": ob.gender
        }
    })
    .sort((a, b) => a.age > b.age? +1: -1)
    .forEach(ob => log(JSON.stringify(ob, null, 4)))

// log(data.colors[0])
// log(data.argb[0])

// log(
//     data
//         .argb[0]
//         .slice(0, -1)
//         .reduce((acc, cur) => acc + cur.toString(16), "")
// )
