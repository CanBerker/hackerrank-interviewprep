#!/bin/python3

import math
import os
import random
import re
import sys
import operator



# Complete the arrayManipulation function below.
def arrayManipulation(n, queries):
    # https://en.wikipedia.org/wiki/Interval_tree
    
    # sort queries in two different lists by their start and end indices
    startSort = sorted(queries, key=operator.itemgetter(0))
    endSort = sorted(queries, key=operator.itemgetter(1))
    print(startSort)
    print(endSort)
    ssqi = 0 # start sort query index
    esqi = 0 # end sort query index
    currentSum = 0  # current sum assigned to interval by queries
    maxSum = 0  # maximum sum encountered so far
    while True:
        while (startSort[ssqi][0] <= endSort[esqi][1]):  # when encountering query interval start
            currentSum += startSort[ssqi][2]    # add the value to current sum
            if currentSum > maxSum:
                maxSum = currentSum
            ssqi += 1
            if ssqi == len(startSort):  # prevent runtime exception
                break
        
        if ssqi == len(startSort):  # no more intervals sum can't increase anymore
            break
        
        while (startSort[ssqi][0] > endSort[esqi][1]):   # when encountering query interval end
            currentSum -= endSort[esqi][2]    # subtract the value from current sum
            esqi += 1
    
    return maxSum
        
        

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    nm = input().split()

    n = int(nm[0])

    m = int(nm[1])

    queries = []

    for _ in range(m):
        queries.append(list(map(int, input().rstrip().split())))

    result = arrayManipulation(n, queries)

    fptr.write(str(result) + '\n')

    fptr.close()

