#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the repeatedString function below.
def repeatedString(s, n):
    
    strLen = len(s)
    aCount = s.count('a')
    reps = n // strLen
    remainingChars = n % strLen
    aCountRemainingChars = s[:remainingChars].count('a')
    aCountTotal = reps * aCount + aCountRemainingChars
    return aCountTotal

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    n = int(input())

    result = repeatedString(s, n)

    fptr.write(str(result) + '\n')

    fptr.close()

