import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {
    
    static Hashtable<Character, Integer> prepareHashtable(String str) {
        Hashtable<Character, Integer> dict = new Hashtable<Character, Integer>();
        
        for (char ch: str.toCharArray()) {
            if (dict.get(ch) == null) {
                dict.put(ch, 1);
            } else {
                dict.put(ch, dict.get(ch) + 1);
            }
        }
        
        return dict;
    }

    // Complete the twoStrings function below.
    static String twoStrings(String s1, String s2) {
        Hashtable<Character, Integer> shortDict = null;
        Hashtable<Character, Integer> longDict = null;
        
        boolean isCommonSubset = false;
        
        String longerString = s1.length() >= s2.length() ? s1 : s2;
        String shorterString = s1.length() < s2.length() ? s1 : s2;
        
        longDict = prepareHashtable(longerString);
        shortDict = prepareHashtable(shorterString);
        
        for (char ch: shortDict.keySet()) {
            if (longDict.containsKey(ch)) {
                isCommonSubset = true;
                break;
            }
        }
        
        return isCommonSubset ? "YES" : "NO";
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int q = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int qItr = 0; qItr < q; qItr++) {
            String s1 = scanner.nextLine();

            String s2 = scanner.nextLine();

            String result = twoStrings(s1, s2);

            bufferedWriter.write(result);
            bufferedWriter.newLine();
        }

        bufferedWriter.close();

        scanner.close();
    }
}
