const getArray = (amount=10) => {
    return new Array(amount)
        .fill(0)
        .map((_, i) => i)
}

const getArrayRandom = (max=1000, amount=10) => {
    return null
}

module.exports = {
    getArray
}