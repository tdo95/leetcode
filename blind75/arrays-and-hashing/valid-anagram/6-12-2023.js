/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //check if two string are anagrams
    //input => 2 strs
    //output => bool (if strs are anagrams)

    //sort, compare sorted value TC: O(n log n), SC: O (n)
    const sortedS = [...s].sort().join('')
    const sortedT = [...t].sort().join('')

    return sortedT === sortedS
};