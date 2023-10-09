class A {
    #sideC
    constructor(_sideA=1, _sideB=1, _sideC=1) {
        this.sideA = _sideA
        this.sideB = _sideB
        this.#sideC = _sideC 
    }
    get sideC() {
        return this.#sideC
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
for (let f in tre) {
    log(f, tre[f])
}
log(tre.sideC)
tre.sideC = 0
log(tre.sideC)
tre.sideC = 100
log(tre.sideC)
