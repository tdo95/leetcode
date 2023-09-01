/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //group anagram string together
    // input => [str]
    // output => [['','']]

    //create a map of anagrams using sorted string as key TC: O(n log n) SC: O(n)
    const anagramLog = {}
    for (let str of strs) {
        const sortedStr = [...str].sort().join('')
        if (sortedStr in anagramLog) {
            anagramLog[sortedStr] = [...anagramLog[sortedStr], str]
        }
        else {
            anagramLog[sortedStr] = [str]
        }
    }
    const result = []
    for (let group in anagramLog) {
        result.push(anagramLog[group])
    }
    return result
};