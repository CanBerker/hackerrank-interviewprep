import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Complete the hourglassSum function below.
    static int hourglassSum(int[][] arr) {
        int row = 0;
        int maxHourglassSum = 0;
        
        while(row < arr.length - 2) { 
            int column = 0;
            while(column < arr[row].length - 2) {
                int tempSum = arr[row][column] + arr[row][column + 1] + arr[row][column + 2]
                    + arr[row + 1][column + 1]
                    + arr[row + 2][column] + arr[row + 2][column + 1] + arr[row + 2][column + 2];
                if((row == 0 && column == 0) || tempSum > maxHourglassSum) {
                    maxHourglassSum = tempSum;
                }
                column += 1;
            }
            row += 1;
        }
        return maxHourglassSum;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int[][] arr = new int[6][6];

        for (int i = 0; i < 6; i++) {
            String[] arrRowItems = scanner.nextLine().split(" ");
            scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

            for (int j = 0; j < 6; j++) {
                int arrItem = Integer.parseInt(arrRowItems[j]);
                arr[i][j] = arrItem;
            }
        }

        int result = hourglassSum(arr);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
