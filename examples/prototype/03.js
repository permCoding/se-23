const _ = require("lodash")
const log = console.log

class Figure {
    constructor (_color="black") {
        this.color = _color
    }
    print_color() {
        log(`my color = ${this.color}`)
    }
}

let fig_a = new Figure("white")
let fig_b = new Figure()

fig_a.print_color()
fig_b.print_color()

log(fig_a instanceof Figure)

log(fig_a === fig_b)
log(fig_a.color === fig_b.color)
log(fig_a.print_color === fig_b.print_color)
log(fig_a.print_color == fig_b.print_color)

log(fig_a.print_color)
log(Object.is(fig_a, fig_b))
log(Object.is(fig_a.print_color, fig_b.print_color))

log(_.isEqual(fig_a, fig_b))
log(_.isEqual(fig_a.print_color, fig_b.print_color))

// одна и та же по логике функция дублируется во всех объектах