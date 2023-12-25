
let count = 1 * 10**6

let arr = new Array(count)
    .fill(0)
    .map(x => Math.floor(Math.random()*100))

console.time('t')
let x = 0, y = 0, last = arr.length-1, pos = 0;
let shift = 100_000; // время доступа O(1)
for (let i=0; i<10**6; i++) {
    pos = shift + Math.floor(Math.random() * 1_000)
    // x = arr.at(pos) // это медленнее
    x = arr[pos] // это быстрее
    y = x + 1
}
console.timeEnd('t')
