class Queue {
    constructor() {
        this.array = []
    }

    print = () => {
        console.log(this.array)
    }

    enqueue = (element) => {
        this.array.push(element)
    }

    dequeue = () => {
        return this.array.shift()
    }

    isEmpty = () => {
        return this.array.length === 0
    }

    size = () => {
        return this.array.length
    }
}

let st = new Queue()
console.log(st.size())
st.enqueue(101)
st.enqueue(102)
st.enqueue(103)
console.log(st.size())
console.log(st.dequeue())
st.print()
console.log(st.isEmpty())
