const getSum = (line) => {
    return line
        .split(' ')
        .map(x => Number(x))
        .filter(x => x%2 !=0)
        .reduce((acc, cur) => acc + cur)
}

const PI = 3.14

class MyClass {
    
}

module.exports = {
    getSum,
    constPI: PI
} 