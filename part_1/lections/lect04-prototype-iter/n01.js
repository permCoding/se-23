const log = console.log

Object.prototype.get = function (index) {
    return this[index]
}

let arr = [1,2,3]
log(typeof arr)
log(arr.get(1))

arr = "1,2,3"
log(typeof arr)
log(arr.get(1))

arr = 123
log(typeof arr)
log(arr.get(1))
