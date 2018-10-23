#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the hourglassSum function below.
def hourglassSum(arr):
    max = -sys.maxsize;
    for i in range(1, 5):
        for j in range(1, 5):
            hgsum = sum(arr[i-1][j-1:j+2]) + arr[i][j] + sum(arr[i+1][j-1:j+2])
            if hgsum > max:
                max = hgsum
            
    return max
        

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr = []

    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split())))

    result = hourglassSum(arr)

    fptr.write(str(result) + '\n')

    fptr.close()

