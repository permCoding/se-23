const data = require("./data/data.js")
const { clients } = require("./data/clients.json")
const log = console.log


// log(clients[0])

// let str = JSON.stringify(clients, ["name", "address"], 4)
// log(JSON.parse(str))

log(data.colors[0])
log(data.argb[0])


log(
    data
        .argb[0]
        .slice(0, -1)
        .reduce((acc, cur) => acc + cur.toString(16), "")
)
