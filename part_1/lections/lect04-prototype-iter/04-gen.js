const log = console.log

function* range(a, b, step=1) {
    let i = a
    while (i < b) {
        yield i // pause
        i += step
    }
}

function ex01() {
    for (i of range(2, 11, 3)) { // сделаем как в Python
        log(i)
    }
}

function ex02() {
    let gen = range(2, 20, 3)
    log(gen.next().value)
    log(gen.next().value)
    log(gen.next().value)
    log(gen.next())
    log(gen.next())
    log(gen.next())
    log(gen.next()) // done: true
}

console.clear()
// ex01()
ex02()
