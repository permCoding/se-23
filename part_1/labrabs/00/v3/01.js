// require() // CommonJS

const log = console.log

let arr
arr = new Array(10)
    .fill(0)
arr = [1,4,3,0,5]
log(arr.slice(-3,))
log(arr.slice(+2,))
let deleted = arr.splice(2,)

log(deleted)
log(arr)

arr = [0,1,   2,3,4,5,6]
ins = [99,88,77]
// arr.splice(2, 0, ...ins)
// log(arr)

let res = [...arr.slice(0,2),  ...ins, ...arr.slice(2,)]  // spread
log(res)