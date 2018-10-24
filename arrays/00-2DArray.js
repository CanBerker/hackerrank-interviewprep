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

function hourglassSum(arr) {
  var maxSum = -999999;
  for (var i = 1; i < arr.length - 1; i++) {
    for (var j = 1; j < arr[0].length - 1; j++) {
      var currentSumTop = 0;
      var currentSumMiddle = arr[i][j];
      var currentSumBottom = 0;
      
      for (var k = j - 1; k <= j + 1; k++) {
        currentSumTop += arr[i-1][k]; 
      }

      for (var k = j - 1; k <= j + 1; k++) {
        currentSumBottom += arr[i+1][k]; 
      }

      maxSum = Math.max(maxSum, currentSumTop + currentSumMiddle + currentSumBottom);
    }
  }

  return maxSum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
