const ex_01 = () => {
    let arr = Array(2*1e6).fill("some string")
}

const ex_02 = () => {
    let str = "some string"
    let arr = Array(2*1e6).fill(str)
    arr[0] = "other string"
    console.log(arr.slice(0, 5))
}

const ex_03 = () => {
    let str = "some string"
    let arr = []
    var i
    for (i = 0; i < 1*1e5; i++) {
        arr.push( str )
    }
    arr[0] = "other string"
    console.log(arr.slice(0, 5))
}

const ex_04 = () => {
    let str = "some string"
    let arr = []
    for (let i = 0; i < 2*1e6; i++) {
        arr.push( str )
    }
}

const ex_05 = () => {
    let obj = { "str": "some string" }
    let arr = []
    for (let i = 0; i < 1*1e6; i++) {
        arr.push( obj )
    }
    arr[0].str = "other string"
    console.log(arr.slice(0, 5))
}

// ex_01()
// ex_02()
// ex_03()
// ex_04()
ex_05()

const used = process.memoryUsage()
console.log(Object.keys(used))
for (let key in used) {
    console.log(`${key} ${Math.round(used[key]/1024/1024*100)/100} MB`);
}
