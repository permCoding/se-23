Number.prototype.getCountDigit = function () {
    return this.toString(10).length
}

Array.prototype.getCountOdd = function () {
    return this.filter(x => x%2).length
}

let arr = [1,2,3,4,5,6,99,11]
console.log(arr.getCountOdd())

let num = new Number("123.789")
console.log(num + num)
console.log(num.toFixed(2))
console.log(num.getCountDigit())
