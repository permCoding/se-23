const { Worker } = require('worker_threads')

const run_thread = (workerData) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', { workerData })
        worker.on('message', resolve)
        worker.on('error', reject)
        worker.on('exit', (code) => {
            if (code !== 0) reject(new Error(`exit code ${code}`))
        })
    })
}

const main = async () => {
    let n = 30
    const result = await run_thread({n})
    console.log(result)
}

main().catch(err => console.error(err))