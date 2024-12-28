const array = [1,2,3,4,5,6,7,8,9]

const tail = array.slice(-2).reverse()

console.log(array)
console.log(tail)

let elems = array.splice(-2, 2, ...tail)

console.log(array)
console.log(elems)
