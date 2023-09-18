// const getRA = require("./module").getRandomArray
// const obj = require("./module") // obj.getRandomArray(10, 100)
const { 
    getRandomArray, 
    getIndexElement 
} = require("./module")

Array.prototype.checkElm = function (elm) {
    return this.includes(elm)
}

console.clear()
let arr = getRandomArray(10, 20)
arr.sort((a, b) => a>b? +1: -1)  
arr.forEach((elm, ind) => console.log(`${ind} => ${elm}`))

let elm = 15
// let ind = getIndexElement(arr, elm)
console.log(arr.checkElm(elm))



/*


*/