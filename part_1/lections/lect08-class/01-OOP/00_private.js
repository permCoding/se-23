class A {
    #sideC
    constructor(_sideA=1, _sideB=1, _sideC=1) {
        this.sideA = _sideA
        this.sideB = _sideB
        this.#sideC = _sideC 
    }
    get sideC() {
        return "0." + this.#sideC.toString()
    }
    set sideC(value) {
        if (value > 0) {
            this.#sideC = value
        }
    }
}


const log = console.log
console.clear()

let tre = new A()
for (let field in tre) {
    log(field, tre[field])
}
log(tre.sideC)
tre.sideC = 0  // не сработает - так как свойство
log(tre.sideC)
tre.sideC = 234
log(tre.sideC)
