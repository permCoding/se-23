const log = console.log

Object.prototype.get = function () {
    return 444
}

console.clear()

let x = 4 // Number
log(x.get())
log((1234567).get())

// Object()

// Number()
// String()
// Array()
// Boolean()
