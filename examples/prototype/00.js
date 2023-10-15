const _ = require("lodash")
const log = console.log

console.clear()

let x = "py", y = "py" // примитивы
log(
    x == y,
    x === y,
    Object.is(x, y),
    _.isEqual(x, y)
)

// let a = { "lang": "py", id: 0 }, b = { "lang": "py", id: "0" } // объекты
let a = { "lang": "py", id: 0 }, b = { "lang": "py", id: 0 } // объекты
log(
    a == b,
    a === b,
    Object.is(a, b), // отличается и от == и от ===
    _.isEqual(a, b) // deeep equal - проверяет рекурсивно равенство === значений всех полей
)

// _.isEqual https://docs-lodash.com/v4/is-equal/
// написать свою рекурсивную функцию глубокой проверки на equal

/* https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    if (!Object.is) {
        Object.is = function(x, y) {
            if (x === y) { +0 != -0
                return x !== 0 || 1 / x === 1 / y;
            } else { NaN == NaN
                return x !== x && y !== y;
            }
        };
    }
*/