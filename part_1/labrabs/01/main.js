const getRandomArray = (len, maxNumber) => {
    return new Array(len).fill(0)
}


console.clear()
let arr = getRandomArray(10, 100)
arr.forEach((elm, ind) => console.log(`${ind} => ${elm}`))


/*


*/