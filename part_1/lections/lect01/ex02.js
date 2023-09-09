function ex01() {
    // node ex01 1 2 3 4 5 6
    // console.log(process)
    // console.log(process.argv)
    a = process.argv

    console.log(typeof a)
    console.log(a
        .slice(2,)
        .map(x => +x).filter(x => x%2!=0)
        .reduce((a,b) => a+b, 0)
    )
}

function ex02() {
    // let var const

    for (var i=0; i<5; ++i) {
        console.log(i)
    }
    console.log(i)

    const obj = {
        "id": 1,
        "rate": 212
    }

    obj.rate = 200

    console.log(obj)

    try {
        obj = {
            "id": 1,
            "rate": 222
        }    
    } catch (error) {
        console.error(error)
    }

    console.log('stop')
}

function ex03() {
    // function as object
    const func = (a, b) => {
        return Number(a.toString() + b.toString())
    }

    const numConcat = func

    console.log(numConcat(1200, 3456))
}

function ex04() { // так нельзя - анонимные не имеют ссылку
    Array.prototype.sumSides = () => {
        return this[0]
    }
    
    let arr = [1,2,3,4]
    console.log(arr.sumSides())
}

function ex05() { // так можно - есть ссылка на функцию
    Array.prototype.sumSides = function () {
        return this[0] + this[this.length-1]
    }
    
    let arr = [1,2,3,4]
    console.log(arr.sumSides())
}

const ex06 = () => {
    Array.prototype.upArray = function (up) {
        return this.map(x => x + Math.floor(Math.random() * up))
    }

    let arr = Array(10).fill(0).map((elm,ind) => ind).upArray(5)
    console.log(arr)
}

ex06()
