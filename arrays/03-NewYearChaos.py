#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the minimumBribes function below.
# in order to get the minimum count of bribes, we should process people in the queue in ascending order

def minimumBribes(q):
    alreadyFound = set()
    toBeFound = set()
    bribeCount = 0
    for i in range(0, len(q)):
        if(q[i] > i+1+2):  #  +1 index starts from 1 in the queue, +2 -> max 2 bribes
            return "Too chaotic"
        elif(q[i] == i+1+2):        # 2 bribes found
            bribeCount += 2
            alreadyFound.add(q[i])
            # if 2 bribes by n, n-2 should be next, n-1 should be following
            if((q[i]-1) not in alreadyFound):
                toBeFound.add(q[i]-1)
            if((q[i]-2) not in alreadyFound):
                toBeFound.add(q[i]-2)
        elif(q[i] == i+1+1):        # 1 bribe found
            bribeCount += 1
            alreadyFound.add(q[i])
            # if single bribe by n, n-1 should be next
            if((q[i]-1) not in alreadyFound):
                toBeFound.add(q[i]-1)
        else:
            alreadyFound.add(q[i])
            if(q[i] in toBeFound):
                # if we find the expected item stated above, it should be the minimum item in the set.
                # if we find something else, the already bribed items bribed amongst themselves
                if(q[i] != min(toBeFound)):
                    bribeCount += 1
                toBeFound.remove(q[i])
        
                
    return bribeCount

if __name__ == '__main__':
    t = int(input())
    
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    for t_itr in range(t):
        n = int(input())

        q = list(map(int, input().rstrip().split()))

        result = minimumBribes(q)

        fptr.write(str(result) + '\n')
    fptr.close()
