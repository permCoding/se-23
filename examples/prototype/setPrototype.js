const fieldGetArraySum = {
    valueOf: function () {
        return Array.prototype.reduce.call(
            this,
            (acc, cur) => acc + cur
        )
    }
}

let arr = [1, 2, 3, 4]

console.log(9 + arr)

// Reflect.setPrototypeOf(arr, fieldGetArraySum) // ver 1

arr.__proto__ = fieldGetArraySum // ver 2

console.log(9 + arr)
