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

class Rectangle extends Figure { // inheritance - наследование
    constructor (_w, _h, _c) {
        super(_c)
        this.width = _w
        this.height = _h
    }
}

let fig_1 = new Rectangle(3, 4), fig_2 = new Rectangle(4, 5)

fig_1.print_color(); fig_2.print_color()

log(
    fig_1.print_color === fig_2.print_color,
    fig_1.print_color == fig_2.print_color,
    Object.is(fig_1.print_color, fig_2.print_color),
    _.isEqual(fig_1.print_color, fig_2.print_color)
) // true - this good !

log(
    _.isEqual(fig_1, fig_2) // объекты разные, но ссылки на методы одинаковые
)