'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    const numberOfRepetitions = parseInt(n / s.length, 10);
    const numberOfRemaining = n % s.length;
    
    let aCounter = 0;
    let aCounterLastIter = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            aCounter++;
            
            // Increment the counter for the last/probably incomplete iteration of the loop
            if (i < numberOfRemaining) {
                aCounterLastIter++;
            }
        }
    }

    return aCounter * numberOfRepetitions + aCounterLastIter;    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
