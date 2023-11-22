const { time, timeEnd } = require("console");
const fs = require("fs");
const log = console.log


const writeCSV = (data) => {
    let lines = data.split(/\r?\n/g).slice(1,)

    let result = []
    for (let i=0; i<800_000; i++) {
        result.push(lines[Math.floor(Math.random()*lines.length)])
    }

    fs.writeFileSync("./data/abiturs_rn.csv", result.join("\r\n"), {encoding: "utf-8", flag: "w"})
}

const gen = () => {
    let options = { encoding:"utf-8", flag: "r" }
    fs.readFile("./data/abiturs.csv", options, (error, data) => {
        if (error) throw error;
        writeCSV(data)
    })
}

const processCSV = (data, shift=0) => {
    let lines = data
        // .split("\n")
        // .split(/\n/g)
        // .split(/\r\n/g)
        // .split(/\r{0,1}\n/g)
        // .split(/\r?\n/g) // 800_000 => 600 ms

        .replace("\r", "")
        .split("\n") // 800_000 => 700 ms
    log(lines.length)
}

const test = () => {
    let options = { encoding:"utf-8", flag: "r" }
    fs.readFile("./data/abiturs_rn.csv", options, (error, data) => {
        if (error) throw error;
        time("test");
        processCSV(data)
        timeEnd("test")
    })
}

// gen()
test()
