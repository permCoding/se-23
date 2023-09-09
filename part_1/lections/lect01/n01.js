const log = console.log

function ex01() {
    // var x
    2**53-1
    9007199254740991
    let num = Infinity
    console.log(num-1)
    let x = BigInt('10000000000000000000000000000000000')
    log(x + 99999900000n)    
}

const ex02 = () => {
    for (var i=0; i<5; i++) {
        log(i)
    }
    try {
        log(i)   
    } catch (error) {
        log('lwejdbjkvehbf')
    }
}

const ex03 = () => {
    const obj = {
        "id": 1,
        "rate": 200
    }
    obj.rate++
    let field = "rate"
    log(`rate = ${obj[field]}`)
    obj.name = "Mike"

    // obj = {
    //     name: "Igor"
    // }

    log(JSON.stringify(obj, null, 4))
}

const ex04 = () => {
    // parent
    // Number
    // +
}

console.clear()

ex03()