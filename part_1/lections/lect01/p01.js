const log = console.log

function ex01() {
    a = 0
    // b = a++ // 1 0
    b = ++a // 1 1
    log(a, b)
}

function ex02() {
    for (var i=0; i<5; i++) {
        log(i)
        if (i == 2) {
            break
        }
    }
    try {
        log(i)
    } catch (error) {
        log('i is not defined')
    }
}

console.clear()
ex02()

// var

// let

// const
