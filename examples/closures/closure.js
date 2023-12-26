/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = (n) => {
    return () => {
        return n++; // postfix n ++
    }
}

const counter = createCounter(10)

for (let _ of [1,2,3,4,5]) {
    console.log(counter())
}
