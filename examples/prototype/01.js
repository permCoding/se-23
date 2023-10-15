const _ = require("lodash")
const log = console.log

function Figure (_color="black") {
    this.color = _color
    this.print_color = function () {
        log(`my color = ${this.color}`)
    }
}

let fig_a = new Figure("white"), fig_b = new Figure()

fig_a.print_color(); fig_b.print_color()

log(
    typeof(fig_a),
    fig_a instanceof Figure,
    fig_a.print_color
)

log(
    fig_a === fig_b,
    fig_a.color === fig_b.color,
    fig_a.print_color === fig_b.print_color, // ссылки на функции
    fig_a.print_color == fig_b.print_color // с приведением типов
)

log(
    Object.is(fig_a, fig_b),
    Object.is(fig_a.print_color, fig_b.print_color),
    _.isEqual(fig_a, fig_b),
    _.isEqual(fig_a.print_color, fig_b.print_color)
)

// одна и та же по логике функция дублируется во всех объектах

let x = "py", y = "py" // примитивы
log(
    x == y,
    x === y,
    Object.is(x, y)
)

let a = { "lang": "py" }, b = { "lang": "py" } // объекты
log(
    a == b,
    a === b,
    Object.is(a, b),
    _.isEqual(a, b)
)