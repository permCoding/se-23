class Stack {

    constructor () {
        this.stack = [];
    }

    isEmpty () {
        return this.stack.length === 0;
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is Empty...');
        }
        return this.stack.pop();
    }

    get size() {
        return this.stack.length;
    }
}

const log = console.log

let st = new Stack();

st.push(101);
st.push(2002);
st.push(30003);

while (!st.isEmpty()) {
    log(st.size, st.pop());
}
