class Stack {
    constructor() {
        this.array = []
    }

    print = () => { // распечатать в консоль массив
    
    }

    push = (value) => { // добавить на вершину
        
    }

    pop = () => { // снять с вершины и вернуть last
        
    }

    peek = () => { // вернуть с вершины, не меняя стек
        
    }

    size = () => { // вернуть размер
        return this.array.length
    }
}

let stack = new Stack()
console.clear()
console.log(stack)
console.log(`size = ${stack.size()}`)
