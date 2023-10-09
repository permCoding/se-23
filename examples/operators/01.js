// оператор нулевого слияния
const log = console.log

const func1 = (attr=100) => {
    return attr
}
const func2 = (attr) => {
    return attr || 200
}
const func3 = (attr) => {
    return attr ?? 300
}
const func4 = (attr, shift) => {
    attr = ++attr ?? ++shift // ленивые вычисления
    // return [attr, shift]
    return {attr, shift}
}

console.clear()

log(func1())
log(func2())
log(func2(0)) // а хотелось именно 0
log(func3())
log(func3(0)) // а тут работает корректно
log(func4(0, 100))

