import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the sockMerchant function below.
    static int sockMerchant(int n, int[] ar) {
        int pairCount = 0;
        int[] pairCounts = new int[101];
        List<Integer> colours = new ArrayList();
        
        for(int i = 0; i < ar.length; i++) {
            pairCounts[ar[i]]++;
            if(!colours.contains(ar[i])) {
                colours.add(ar[i]);
            }
        }
        
        for(int i = 0; i < colours.size(); i++) {
            int sockCount = pairCounts[colours.get(i)];
            if(sockCount != 0) {
                if(sockCount % 2 == 0) {
                    pairCount += sockCount / 2;
                }
                else if(sockCount > 1) {
                    pairCount += (sockCount - 1) / 2;
                }
            }
        }
        
        return pairCount;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[] ar = new int[n];

        String[] arItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            int arItem = Integer.parseInt(arItems[i]);
            ar[i] = arItem;
        }

        int result = sockMerchant(n, ar);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
