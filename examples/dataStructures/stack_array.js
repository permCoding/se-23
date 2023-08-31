class Stack {
    constructor() {
        this.array = []
    }

    print = () => {
        console.log(this.array)
    }

    push = (value) => {
        this.array.push(value)
    }

    pop = () => {
        if (this.array.length === 0) return undefined
        let result = this.array[this.array.length - 1]
        // delete this.array[this.array.length - 1]
        this.array.length--
        return result
    }

    peek = () => {
        return this.array[this.array.length - 1]
    }

    size = () => {
        return this.array.length
    }
}

let st = new Stack()
console.log(st.size())
st.push(101)
st.push(102)
st.push(103)
st.push(104)
console.log(st.size())
console.log(st.pop())
console.log(st.pop())
console.log(st.array)
console.log(st.pop())
console.log(st.pop())
console.log(st.array)
