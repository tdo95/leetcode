/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0
    let r = s.length - 1
    lowerS = s.toLowerCase()
    
    while (l < r) {
        while (l < r && !isAlpha(lowerS[l])) l++
        while (l < r && !isAlpha(lowerS[r])) r--
      
        if (lowerS[l] !== lowerS[r]) {
            return false
        }
        else {
            l++
            r--
        }
    }
    return true

    function isAlpha(s) {
        return s.match(/^[0-9a-z]+$/) !== null
    }

};