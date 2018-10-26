"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  var swapCount = 0;

  for (var i = 0; i < arr.length - 1; i++) {
    // If number is already in the right place, continue
    // Otherwise look for the right element in the rest of the array and swap
    if (arr[i] === i + 1) {
      continue;
    } else {
      var found = false;
      for (var j = i + 1; !found && j < arr.length; j++) {
        if (arr[j] === i + 1) {
          // Swap numbers
          var temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;

          swapCount++;
          found = true;
        }
      }
    }
  }

  return swapCount;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  const res = minimumSwaps(arr);

  ws.write(res + "\n");

  ws.end();
}
