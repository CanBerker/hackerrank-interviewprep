// FIXME: This code fails tests #6 and #10

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function updateDict(dict, number) {
  if (dict[number]) {
    dict[number]++;
  } else {
    dict[number] = 1;
  }

  return dict;
}

// Calculates n factorial
function factorial(n) {
  var fact = 1;

  for (var i = n; i > 1; i--) {
    fact *= i;
  }

  return fact;
}

// Calculates #possibilities to choose k elements out of n
// Combination of selecting n elements out of k is denoted as: n! / ((n-k)! * k!)
// n! / n-k! leaves us with the product of numbers decrementing from n to n-k,
// so instead of multiplying all values we do the product in O(n-k) time (~constant)
function combination(n, k) {
  var product = 1;

  for (var i = n; i > n - k; i--) {
    product *= i;
  }

  return product / factorial(k);
}

// Complete the countTriplets function below.
function countTriplets(arr, r) {
  var dict = {};
  var tripletCount = 0;

  // PS: Sorting didn't really change much. Just adds complexity
  arr.sort((a, b) => a - b);

  // Add the first two elements to the dictionary
  for (var i = 0; i < 2; i++) {
    dict = updateDict(dict, arr[i]);
  }

  for (var i = 2; i < arr.length; i++) {
    var curr = arr[i];
    // If curr/r and curr/r^2 exists, then a geometric triplet is in place
    if (dict[curr / r] && dict[curr / (r * r)]) {
      var numberOfTriplets;

      if (curr / r === curr / (r * r)) {
        numberOfTriplets = combination(dict[curr / r], 2);
      } else {
        numberOfTriplets = dict[curr / r] * dict[curr / (r * r)];
      }

      tripletCount += numberOfTriplets;
    }

    dict = updateDict(dict, arr[i]);
  }

  return tripletCount;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nr = readLine()
    .replace(/\s+$/g, "")
    .split(" ");

  const n = parseInt(nr[0], 10);

  const r = parseInt(nr[1], 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  const ans = countTriplets(arr, r);

  ws.write(ans + "\n");

  ws.end();
}
