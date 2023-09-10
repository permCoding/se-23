class Struct {
    constructor(count) {
        this.array = new Array(count).fill(0).map((_,i) => i)
    }

    last = () => {
        return this.array[this.array.length-1]
    }

    size = () => {
        return this.array.length
    }

    delete = (index) => {
        if (this.array[index]) {
            delete this.array[index]
        }
    }

    terminate = (len) => {
        this.array.length = len
    }
}


console.clear

let arr = new Struct(10)

console.log(arr, arr.size())

arr.delete(1)
console.log(arr, arr.size())

arr.terminate(5)
console.log(arr, arr.size())

// массив не список
