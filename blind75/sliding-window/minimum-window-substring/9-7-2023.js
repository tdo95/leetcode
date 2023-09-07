var minWindow = function(s, t) {
    if (!s || !t || s.length < t.length) return ''

    let l = 0, r = 0, needCount = new Set(t).size
    let subStr = ''

    const freqMap = {}
    for (const ch of t) freqMap[ch] = (freqMap[ch] || 0) + 1

    while (r < s.length) {
        const char = s[r]
        freqMap[char]--
        if (freqMap[char] === 0) needCount--

        while (needCount === 0) {
            if (!subStr || subStr.length > r - l + 1) subStr = s.slice(l, r + 1)

            const leftChar = s[l]
            //if we lost a needed character in the window, increase need
            if (freqMap[leftChar] === 0) needCount++ 
            freqMap[leftChar]++
            l++
        }
        r++
        
    }
    return subStr
}