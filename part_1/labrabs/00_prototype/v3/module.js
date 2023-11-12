const getArray = (amount=10) => {
    return new Array(amount)
        .fill(0)
        .map((_, i) => i)
}

const getArrayRandom = (max=1000, amount=10) => {
    return new Array(amount)
        .fill(0)
        .map((_, i) => Math.floor(Math.random() * max))
        // .sort((a,b) => a - b)
        .sort((a,b) => a > b? +1: -1)
}

const getIndexElement = (arr, elm) => {
    
    return null
}

module.exports = {
    getArray,
    getArrayRandom
}