const fs = require("fs");
const log = console.log

const ex_01 = () => {
    log(111111)
    let data = fs.readFileSync("./data/abiturs.csv", "utf-8")
    log(data)
    log(999999)
}

const ex_02 = () => {
    log(111111)
    fs.readFile("./data/abiturs.csv", "utf-8", (error, data) => {
        log(data)
    })
    log(999999)
}

const ex_03 = () => {
    fs.readFile("./data/abiturs.csv", "utf-8" , (error, data) => {
        log(111111)
        log(data)
        log(999999)
    })
}

const processData = (data) => {
    log(111111)
    log(data)
    log(999999)
}

const ex_04 = () => {
    let options = { encoding:"utf-8", flag: "r" }
    fs.readFile("./data/abiturs.csv", options, (error, data) => {
        if (error) throw error;
        processData(data)
    })
}

ex_04()
