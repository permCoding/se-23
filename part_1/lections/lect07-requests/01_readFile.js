const fs = require("fs");
const log = console.log

const ex_01 = () => {
    log(111111)
    let data = fs.readFileSync("./data/abiturs.csv", "utf-8")
    log(data)
    log(999999)
}

const ex_02 = () => {
    log(111111)/
    fs.readFile("./data/abiturs.csv", "utf-8", (error, data) => {
        log(data)
    })
    log(999999)
}

const ex_03 = () => {
    log(111111)
    fs.readFile("./data/abiturs.csv", "utf-8", (error, data) => {
        log(data)
    })
    let pause = 3000 // 1000 ms => 1 sec
    setTimeout(() => log(`999999\n==> pause = ${pause} ms`), pause)
}

const ex_04 = () => {
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

const ex_05 = () => {
    let options = { encoding:"utf-8", flag: "r" }
    fs.readFile("./data/abiturs.csv", options, (error, data) => {
        if (error) throw error;
        processData(data)
    })
}

const readFilePromise = (filename) => {
    return new Promise((resolve, reject) => {
        let options = { encoding:"utf-8", flag: "r" }
        fs.readFile(filename, options, (error, data) => {
            if (error) reject(error);
            resolve(data)
        })
    })
}

const start = async (filename) => {
    log("==> begin <==")

    let promise = readFilePromise(filename)
    await promise
        // .then(data => log(data)) // ver 1
        // .then(data => processData(data)) // ver 2
        .then(data => { // ver 3
            let lines = data.split(/\r?\n/g)
            return lines.slice(1,)
        })
        .then(data => processData(data)) // ver 3
        .catch(error => log(error.message))
        .finally(() => log("finally"))
    
    log("==>  end  <==")
}

const ex_06 = () => {
    // start("./data/abi_turs.csv")
    start("./data/abiturs.csv")
}

ex_06()
