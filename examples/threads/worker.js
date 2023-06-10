const { workerData, parentPort } = require('worker_threads')

const fib = (n) => {
    if (n < 1) return 0
    return n<2? n: fib(n-1)+fib(n-2)
}

console.log(workerData)
let result = fib(workerData.n)

parentPort.postMessage(result)
