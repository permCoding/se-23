// sudo npm i -g typescript
// tsc -v

const log = console.log

let x : number = 123
let y : string = "222"
x = parseInt(y)
log(x, typeof x)

let q = "" + x
log(q, typeof q)
