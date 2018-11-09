import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the repeatedString function below.
    static long repeatedString(String s, long n) {
        char[] stringArray = s.toCharArray();
        long countOfA = 0;
        
        for(int i = 0; i < stringArray.length; i++) {
            if(stringArray[i] == 'a') {
                countOfA++;
            }
        }
        long diffModulus = n % stringArray.length;
        if(diffModulus == 0) {
            return (n / stringArray.length) * countOfA;
        }
        else {
            long sum = ((n - diffModulus) / stringArray.length) * countOfA;
            for(int i = 0; i < diffModulus; i++) {
                if(stringArray[i] == 'a') {
                    sum++;
                }
            }
            
            return sum;
        }
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = scanner.nextLine();

        long n = scanner.nextLong();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        long result = repeatedString(s, n);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
