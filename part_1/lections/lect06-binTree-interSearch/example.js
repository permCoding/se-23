let arr = Array(10)
    .fill(0)
    .map(x => Math.floor(10 * Math.random()))

console.log(arr)

let dict = arr.reduce((a, b) => {
        a[b] = Object.keys(a).includes(b.toString())? a[b]+1: 1
        return a
    }
, {})

console.log(dict)
