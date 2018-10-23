#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the countingValleys function below.
def countingValleys(n, s):
    height = 0
    inValley = False
    valleyCounter = 0
    for letter in s:
        if letter == 'U':
            height += 1
        elif letter == 'D':
            height -= 1
        
        if inValley == False and height < 0:
            valleyCounter += 1
            inValley = True
        elif inValley == True and height >= 0:
            inValley = False
    return valleyCounter
        

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    s = input()

    result = countingValleys(n, s)

    fptr.write(str(result) + '\n')

    fptr.close()

