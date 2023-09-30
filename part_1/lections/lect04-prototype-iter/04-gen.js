const log = console.log

function* range(a, b, step=1) {
    let i = a
    while (i < b) {
        yield i
        i += step
    }
}

function ex01() {
    for (let elm of range(5, 15)) { // сделаем как в Python
        log(elm)
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
    log(gen.next())
}

console.clear();
ex01()
ex02()
