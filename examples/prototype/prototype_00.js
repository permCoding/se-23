const _ = require("lodash")
const log = console.log

function Fig (_color="black") {
    this.color = _color
    this.print_color = function () {
        log(`my color = ${this.color}`)
    }
}

class Figure {
    constructor (_color="black") {
        this.color = _color
    }
    print_color() {
        log(`my color = ${this.color}`)
    }
}

// let n = new Number()
// log(n)
// log(n instanceof Number)

// let fig_a = new Figure("white")
// let fig_b = new Figure()
let fig_a = new Fig("white")
let fig_b = new Fig()

fig_a.print_color()
fig_b.print_color()

log(fig_a instanceof Fig)
// log(fig_a instanceof Figure)

log(fig_a.color === fig_b.color)
log(fig_a === fig_b)
log(fig_a.print_color === fig_b.print_color)

log(fig_a.print_color)
log(Object.is(fig_a, fig_b))
log(Object.is(fig_a.print_color, fig_b.print_color))

log(_.isEqual(fig_a, fig_b))
log(_.isEqual(fig_a.print_color, fig_b.print_color))

fig_a.print_color = function () {
    log(`my color = ${this.color}`)
}

log(_.isEqual(fig_a.print_color, fig_b.print_color))

// let fig_1 = new Figure("white")
// let fig_2 = new Figure()
// fig_1.print_color()
// fig_2.print_color()
// log(fig_1.print_color === fig_2.print_color)