function get_sum(line) {
    return line
        .split(' ')
        .map(x => Number(x))
        .filter(x => x%2 !=0)
        .reduce((acc, cur) => acc + cur)
}

console.clear()
let line = "12 45 34 77"
console.log(get_sum(line))