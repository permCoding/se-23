/**
 * функция итератор
 * @param {integer} n
 * @returns {integer}
 */
function* createCounter(n) {
    while (true) {
        yield n++
    }
}

const counter = createCounter(10)

for (let _ of [1,2,3,4,5]) {
    console.log(counter.next().value)
}

console.log(counter.next().value) // iterator
