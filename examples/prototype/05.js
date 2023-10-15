const _ = require("lodash")
const log = console.log

class Figure {
    constructor (_color="black") {
        this.color = _color
    }
}

Figure.prototype.print_color = function () {
    log(`my color = ${this.color}`)
}

let fig_a = new Figure("white"), fig_b = new Figure()

fig_a.print_color(); fig_b.print_color()

log(
    fig_a === fig_b,
    fig_a.color === fig_b.color,
    fig_a.print_color === fig_b.print_color,
    fig_a.print_color == fig_b.print_color
)

log(
    Object.is(fig_a, fig_b),
    Object.is(fig_a.print_color, fig_b.print_color),
    _.isEqual(fig_a, fig_b),
    _.isEqual(fig_a.print_color, fig_b.print_color)
)

// а теперь изменим привязку
fig_a.print_color = function () {
    log(`my color = ${this.color}`)
}

fig_a.print_color(); fig_b.print_color()

log(
    fig_a.print_color === fig_b.print_color,
    fig_a.print_color == fig_b.print_color,
    Object.is(fig_a.print_color, fig_b.print_color),
    _.isEqual(fig_a.print_color, fig_b.print_color)
)
