#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the checkMagazine function below.
def checkMagazine(magazine, note):
    availableWords = {}
    for m in magazine:
        if m in availableWords:
            availableWords[m] += 1
        else:
            availableWords[m] = 1
            
    
    result = "Yes"
    for n in note:
        if n not in availableWords:
            result = "No"
            break
        if availableWords[n] > 0:
            availableWords[n] -= 1
        else:
            result = "No"
            break
            
    return result
            
        
        

if __name__ == '__main__':
    mn = input().split()

    m = int(mn[0])

    n = int(mn[1])

    magazine = input().rstrip().split()

    note = input().rstrip().split()

    result = checkMagazine(magazine, note)
    
    fptr = open(os.environ['OUTPUT_PATH'], 'w')
    
    fptr.write(str(result) + '\n')

    fptr.close()

