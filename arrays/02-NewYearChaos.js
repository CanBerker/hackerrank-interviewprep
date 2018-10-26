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

q1 = [2, 1, 5, 3, 4];
q2 = [2, 5, 1, 3, 4];
q3 = [5, 1, 2, 3, 7, 8, 6, 4];
q4 = [1, 2, 5, 3, 7, 8, 6, 4];

minimumBribes(q1);
minimumBribes(q2);
console.log("********");
minimumBribes(q3);
minimumBribes(q4);

/*
2
5
2 1 5 3 4
5
2 5 1 3 4

3
Too chaotic

***

2
8
5 1 2 3 7 8 6 4
8
1 2 5 3 7 8 6 4

Too chaotic
7

*/
