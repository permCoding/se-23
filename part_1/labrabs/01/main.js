// const getRA = require("./module").getRandomArray
// const obj = require("./module") // obj.getRandomArray(10, 100)
const { 
    getRandomArray, 
    getIndexElement 
} = require("./module")

console.clear()
let arr = getRandomArray(10, 100)
arr.sort((a, b) => a>b? +1: -1)  
arr.forEach((elm, ind) => console.log(`${ind} => ${elm}`))

let elm = arr[5]
// getIndexElement

/*


*/