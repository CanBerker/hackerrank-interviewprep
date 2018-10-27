#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the minimumSwaps function below.
def minimumSwaps(arr):
    swapCount = 0
    for i in range(0, len(arr)):
        if arr[i] == i+1:
            pass
        else:
            for j in range(i+1, len(arr)):
                if arr[j] == i+1:
                    temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                    swapCount += 1
                    break
                    
    return swapCount
        

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    arr = list(map(int, input().rstrip().split()))

    res = minimumSwaps(arr)

    fptr.write(str(res) + '\n')

    fptr.close()
