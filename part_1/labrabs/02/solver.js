const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Stack {
    constructor () {
        this.array = []
    }
    push(value) {
        this.array.push(value)
    }
    pop() {
        return this.array.pop()
    }
    peek() {
        return this.array.at(-1)
    }
}

let lines = [];
rl
    .on('line', (line) => lines.push(line))
    .on('close', () => {
        let a = "([{", b = ")]}"
        let result = true;
        let stack = new Stack();
        for (let smb of lines[0]) {
            if ((a+b).indexOf(smb) >= 0) { // скобка ли это ?
                if (a.indexOf(smb) >= 0) { // открывающая
                    stack.push(smb)
                } else { // закрывающая
                    let last = stack.peek()
                    if (a.indexOf(last) == b.indexOf(smb)) {
                        stack.pop()
                    } else {
                        result = false
                        break
                    }
                }
            }
        }
        console.log(result);
        console.log(stack.array);
    });
