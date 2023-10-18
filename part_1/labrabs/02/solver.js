const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Stack {
    constructor () {
        this.x
    }
}

let lines = [];
rl
    .on('line', (line) => lines.push(line))
    .on('close', () => {
        let result = true;
        let stack = new Stack();
        for (let smb of lines[0]) {
            console.log(smb);
            // if
            // result = false;
        }
        console.log(result);
    });
