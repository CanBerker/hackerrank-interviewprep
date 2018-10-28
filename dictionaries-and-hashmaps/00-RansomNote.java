import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the checkMagazine function below.
    static void checkMagazine(String[] magazine, String[] note) {
        Hashtable<String, Integer> wordDict = new Hashtable<String, Integer>();
        boolean canForm = true;

        // Fill dictionary
        for (String s: magazine) {
            Integer word = wordDict.get(s);
            if (word == null) {
                wordDict.put(s, 1);
            } else {
                wordDict.put(s, wordDict.get(s) + 1);
            }
        }

        for (String n: note) {
            if (wordDict.containsKey(n) && wordDict.get(n) > 0) {
                wordDict.put(n, wordDict.get(n) - 1);
            } else {
                canForm = false;
                break;
            }
        }

        System.out.println(canForm ? "Yes" : "No");
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        String[] mn = scanner.nextLine().split(" ");

        int m = Integer.parseInt(mn[0]);

        int n = Integer.parseInt(mn[1]);

        String[] magazine = new String[m];

        String[] magazineItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < m; i++) {
            String magazineItem = magazineItems[i];
            magazine[i] = magazineItem;
        }

        String[] note = new String[n];

        String[] noteItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            String noteItem = noteItems[i];
            note[i] = noteItem;
        }

        checkMagazine(magazine, note);

        scanner.close();
    }
}
