// статья про this - https://habr.com/ru/articles/464163/
const log = console.log

const ex_01 = () => {
    const smallest = array => Math.min.apply(null, array)
    const largest = array => Math.max.apply(null, array)

    let arr = [10, 1, 32, 8]
    log(smallest(arr), largest(arr))   // 1 32
    log(Math.min(...arr), Math.max(...arr)) // 1 32
}

const ex_02 = () => {
    // у обычной функции есть this
    const func = function () { // NOT arrow function
        log(JSON.stringify(this, null, 4))
    }

    let obj = { 'id': 1, 'rate': 188 }
    func.apply(obj)
}

const ex_03 = () => {
    const func = function (a, b) { // NOT arrow function
        log(this.rate + a + b)
    }

    let obj = { 'id': 1, 'rate': 188 }
    let arr = [10, 20]
    func.apply(obj, arr) // с массивом
    func.call(obj, ...arr) // со значениями
    func.call(obj, 10, 20) // со значениями
}

const ex_04 = () => {
    const obj1 = {
        a: 100,
        show: function (k) {
            log(this.a*k)
        }
    }
    obj1.show(2)

    const obj2 = {
        a: 250,
        k: 3
    }

    obj1.show.apply(obj2, [2]) // с массивом
    obj1.show.call(obj2, 2) // с перечислением

    const newShow = obj1.show.bind(obj2) // создать новую функцию
    newShow([4])
}

// ex_03()
ex_04()
