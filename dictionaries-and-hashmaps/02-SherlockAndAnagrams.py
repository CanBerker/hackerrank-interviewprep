#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the sherlockAndAnagrams function below.
def sherlockAndAnagrams(s):
    anagramCount = 0
    for length in range (1, len(s)):  # iterate over all substrings of length 1 to n-1
        # get all possible sub strings
        subs = {}
        for i in range (0, len(s)-length+1):
            mainSubstring = s[i:i+length]
            # print("main: "+mainSubstring)
            for j in range (i+1, len(s)-length+1):
                nextSubstring = s[j:j+length]
                # sort string ''.join(sorted(a))
                
                # print(nextSubstring)
                
                if sorted(mainSubstring) == sorted(nextSubstring):  
                    anagramCount += 1
        
        # if no single letter matches found, anagram not possible
        if length == 1 and anagramCount == 0:
            break        
            
        # look for matches
    return anagramCount

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    q = int(input())

    for q_itr in range(q):
        s = input()

        result = sherlockAndAnagrams(s)

        fptr.write(str(result) + '\n')

    fptr.close()
