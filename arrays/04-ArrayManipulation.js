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

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
  var array;
  var maxValue = 0;

  var minSearchIndex = 10000000;
  var maxSearchIndex = 0;

  // Determine the range of start and end indices to potentially use less memory
  for (var query of queries) {
    minSearchIndex = Math.min(minSearchIndex, query[0] - 1);
    maxSearchIndex = Math.max(maxSearchIndex, query[1] - 1);
  }

  // Create array
  array = new Array(maxSearchIndex - minSearchIndex + 2).fill(0);

  for (var query of queries) {
    var startIndex = query[0] - 1;
    var endIndex = query[1] - 1;
    var valueToAdd = query[2];

    // Add value to starting index
    array[startIndex - minSearchIndex] += valueToAdd;
    // Mark the element after the end as the stopping point of increment
    if (endIndex - minSearchIndex + 1 < array.length) {
      array[endIndex - minSearchIndex + 1] -= valueToAdd;
    }
  }

  // Turn array into prefix sum array
  for (var i = 1; i < array.length; i++) {
    array[i] += array[i-1];
    maxValue = Math.max(maxValue, array[i-1]);
  }

  return maxValue;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}


const queries1 = [[3, 4, 100], [2, 4, 100], [2, 3, 100]];
arrayManipulation(5, queries1);

// 5 3
// 1 2 100
// 2 5 100
// 3 4 100
