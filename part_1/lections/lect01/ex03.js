const log = console.log

const ex01 = () => {
    let x = 1
    log(isNaN(x))

    x = "1"
    log(isNaN(x))

    x = "3.14159"
    log(isNaN(x))

    x = "NaN"
    log(isNaN(x))
}

const ex02 = () => {
    let x
    log(x)

    let obj = {
        "id": 1,
        "rate": 212
    }
    log(obj.name)
    obj.name = "Mark"
    log(obj.name)
}

const getRandomNumber = () => {
    return Math.floor((Math.random() - .5) * Math.pow(2, 30))
}

const ex03 = () => {
    let array = new Array(10).fill(0).map(x => getRandomNumber())
    log(array)
    let minNumber = Infinity
    for (let x of array) if (x < minNumber) minNumber = x
    log(minNumber)
}

ex01()
ex02()
ex03()
