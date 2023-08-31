class Stack {
    constructor() {
        this.count = 0
        this.storage = {}    
    }

    print = () => {
        console.log(this.storage)
    }

    push = (value) => {
        this.storage[this.count] = value
        this.count++
    }

    pop = () => {
        if (this.count === 0) return undefined
        this.count--
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    peek = () => {
        return this.storage[this.count - 1]
    }

    size = () => {
        return this.count
    }
}

let st = new Stack()
console.log(st.size())
st.push(101)
st.push(102)
st.push(103)
console.log(st.size())
console.log(st.pop())
console.log(st.storage)
// сделать стек из массива
