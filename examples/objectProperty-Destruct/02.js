const { clients } = require('./clients.json')

let avg = 0
for (let { age } of clients) {
    avg += age
}
avg /= clients.length

console.log(`avg = ${avg.toFixed(2)}`)
