const getRandomArray = (len, maxNumber) => {
    return new Array(len)
        .fill(0)
        .map(elm => Math.floor((Math.random() * maxNumber)))
}

const getIndexElement = (arr, value) => {
    let index = 0
    // бинарный поиск
    //
    //
    return index
}

module.exports = {
    getRandomArray,
    getIndexElement
}