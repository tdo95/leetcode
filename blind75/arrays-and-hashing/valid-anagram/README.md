# 242. Valid Anagrams

Link: https://leetcode.com/problems/valid-anagram/

| Date | Language | Level | Difficulty | Duration | TC | SC |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 6/12/2023 | JS   | Easy | 2  | 11 min   | O(n log n)   | O(n)  |

<br>

## Notes

**6/12/2023** <br/>
It is possible to complete this solution without sorting by keeping track of the occurence of each letter. You would first need to check if the words are the same length. Then iterate through length of the word, logging all occurences in wordS as +1 and in wordT as -1 . Then iterate through your map (array in this case) and check if each element is equal to zero. This solution has TC:O(n) SC:O(1). In JS, you might want to use local compare for strings of different languages