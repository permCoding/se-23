const { Worker } = require('worker-threads')

const get_result = async (n) => {
    return new Promise((resolve, reject) => {
        let start = Date.now()
        let worker = new Worker('./d.js', 
            {
                workerData: { n }
            })
        worker.once('message', (data) => {
            console.log(Date.now())
            resolve(data)
        })
        worker.once('error', err => reject(err))
    })
}

console.clear()
console.log('many fib many thread')

const main = async () => {
    let start = Date.now()
    let n = 38
    let results = await Promise.all(
        [
            get_result(n),
            get_result(n),
            get_result(n),
            get_result(n),
            get_result(n)
        ]
    )
    let finish = Date.now()
    console.log(results)
    console.log(`all time = ${finish-start}`)
}
main().catch(console.error)
