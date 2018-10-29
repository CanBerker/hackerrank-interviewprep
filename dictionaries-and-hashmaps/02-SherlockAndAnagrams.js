"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function prepareDict(str) {
  var dict = {};

  for (var i = 0; i < str.length; i++) {
    if (dict[str[i]]) {
      dict[str[i]]++;
    } else {
      dict[str[i]] = 1;
    }
  }

  return dict;
}

function isAnagram(currentDict, followingDict) {
  var isAnagram = true;

  Object.keys(currentDict).forEach(function(key) {
    // If the current key doesn't exist in the following dictionary,
    // or the letter occurrence count is different, then the two
    // strings cannot be anagrams
    if (!followingDict[key] || followingDict[key] !== currentDict[key]) {
      isAnagram = false;
    }
  });

  return isAnagram;
}

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
  var anagramCount = 0;

  // Increase the substring size as we loop through the substrings
  for (var substringSize = 1; substringSize < s.length; substringSize++) {
    // Get current substring and compare with following substrings
    for (var i = 0; i < s.length - substringSize + 1; i++) {
      var currentSubstring = s.substring(i, i + substringSize);
      var currentDict = prepareDict(currentSubstring);

      // Loop through following substrings and check for anagrams
      for (var j = i + 1; j + substringSize <= s.length; j++) {
        var followingSubstring = s.substring(j, j + substringSize);
        var followingDict = prepareDict(followingSubstring);

        // If an anagram is found, increment
        if (isAnagram(currentDict, followingDict)) {
          anagramCount++;
        }
      }
    }
  }

  return anagramCount;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    let result = sherlockAndAnagrams(s);

    ws.write(result + "\n");
  }

  ws.end();
}
