// const { isInteger } = require("lodash")

const log = console.log

const ex01 = () => {
    // у стрелочной функции нет this
    // они не могут быть конструкторами объекта

    function traditional() {
        return true
    }
    
    const arrow = () => {
        return true
    }
    
    log("prototype" in traditional, traditional.prototype)
    log("prototype" in arrow, arrow.prototype)
}

const ex02 = () => {
    class MyClass {
        constructor (width, height) {
            this.width = width
            this.height = height
        }
    }

    function myFunc(width, height) {
        this.width = width
        this.height = height
    }

    const a = new MyClass(3, 4)
    const b = new myFunc(5, 6)

    log(Object.getPrototypeOf(a))
    log(Object.getPrototypeOf(b))

    MyClass.prototype.getArea = function () {
        return this.width * this.height
    }
    myFunc.prototype.getArea = function () {
        return this.width * this.height
    }

    log(Object.getPrototypeOf(a))
    log(Object.getPrototypeOf(b))
    log(a.getArea())
    log(b.getArea())
}

const ex03 = () => {
    log(Math.hypot(3, 4))

    Object.prototype.get_hypot = function (a, b) {
        return Math.hypot(a, b)
    }

    let num = 42
    let arr = [1, 2, 3, 4, 5]

    log(num.get_hypot(3, 4))
    log(arr.get_hypot(3, 4))
}

const ex04 = () => {
    // статические методы видны глобально
    log(parseInt("1213231"))
    log(Number.isInteger("123"))
    log(Number.isInteger(123))
    log(Number.isInteger("mail@ya.ru"))
    // log(isInteger(234))
    log(Number.parseFloat("123.456"))
    log(parseFloat("123.456"))
    // Number.prototype.toFixed - метод объекта
    log(123.456.toFixed(2))
}

console.clear()
// ex01()
// ex02()
// ex03()
ex04()
