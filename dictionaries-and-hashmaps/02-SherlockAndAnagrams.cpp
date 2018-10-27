#include <bits/stdc++.h>
#include <string>

using namespace std;

// Complete the sherlockAndAnagrams function below.
int sherlockAndAnagrams(string s) {
    int anagramCount = 0;
    //  iterate over all substrings of length 1 to n-1
    for (int length = 1; length < s.length(); length++) {
        for (int i = 0; i < s.length() - length + 1; i++) {
            string mainSubstring = s.substr(i,length);
            // cout << "main:" << mainSubstring << endl;
            for (int j = i+1; j < s.length() - length + 1; j++) {
                string nextSubstring = s.substr(j,length);
                
                // cout << nextSubstring << endl;
                
                string sortMainSubstring = mainSubstring;
                string sortNextSubstring = nextSubstring;
                
                std::sort(sortMainSubstring.begin(), sortMainSubstring.end());
                std::sort(sortNextSubstring.begin(), sortNextSubstring.end());
                if (sortMainSubstring == sortNextSubstring ) {
                    anagramCount += 1;
                }
            }                    
        }
        
        // if no single letter matches found, anagram not possible
        if (length == 1 && anagramCount == 0) {
            break;
        }
    }
    // look for matches
    return anagramCount;
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    int q;
    cin >> q;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    for (int q_itr = 0; q_itr < q; q_itr++) {
        string s;
        getline(cin, s);

        int result = sherlockAndAnagrams(s);

        fout << result << "\n";
    }

    fout.close();

    return 0;
}

