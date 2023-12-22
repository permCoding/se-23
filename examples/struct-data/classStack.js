class Stack {
    top = null;
    #size = 0;

    constructor (array) {
        if (array) {
            for (let elm of array) {
                this.push(elm)
            }
        }
    }

    push(value) {
        this.top = { 
            prev: this.top, 
            value 
        }
        this.#size++;
    }

    pop() {
        this.#size--;
        if (this.top) {
            const value = this.top.value;
            this.top = this.top.prev;
            return value;
        } else {
            return null;
        }
    }

    peek() {
        if (!this.top) return null;
        return this.top.value;
    }

    get size() {
        return this.#size
    }
}

const log = console.log

// let st = new Stack([0,200,9]);
// let st = new Stack([]);
let st = new Stack();
st.push(1);
st.push(2);
st.push(3);

while (st.peek() !== null) {
    log(st.size, st.pop());
}
