#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the jumpingOnClouds function below.
def jumpingOnClouds(c):
    index = 0 # start checking from the second index
    counter = 0
    while index+1 <= len(c)-1:      # if one step is allowed
        print("index:" + str(index) + ", ctr:" + str(counter))
        if (index+2) <= len(c)-1 and c[index+2] == 0:    # if two steps are allowed
            index += 2
        else:
            index += 1        
        counter +=1
        
    return counter
    
        

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    c = list(map(int, input().rstrip().split()))
    print (len(c))

    result = jumpingOnClouds(c)

    fptr.write(str(result) + '\n')

    fptr.close()

