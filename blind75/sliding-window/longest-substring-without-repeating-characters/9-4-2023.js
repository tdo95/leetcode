var lengthOfLongestSubstring = function(s) {
    //Time: O(n), Space: O(n) - sliding window, add and removing duplicate values from window
    const subStr = new Set()
    let l = 0
    let largest = 0
    
    for (let i = 0; i < s.length; i++) {
        while (subStr.has(s[i])) {
            subStr.delete(s[l])
            l++
        }
        subStr.add(s[i])
        largest = Math.max(largest, subStr.size)
    }
    return largest
    
};