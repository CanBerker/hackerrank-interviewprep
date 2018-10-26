'use strict';

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

// Complete the minimumBribes function below.
function minimumBribes(q) {
  var bribeCount = 0;
  var isTooChaotic = false;

  for (var i = q.length - 1; i >= 0 && !isTooChaotic; i--) {
    // Calculate how much the i'th person has moved
    if (q[i] - (i + 1) > 2) {
      console.log("Too chaotic");
      isTooChaotic = true;
    }

    for (var j = Math.max(0, q[i] - 2); j < i && !isTooChaotic; j++) {
      if (q[j] > q[i]) {
        bribeCount++;
      }
    }
  }

  if (!isTooChaotic) {
    console.log(bribeCount);
  }
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
