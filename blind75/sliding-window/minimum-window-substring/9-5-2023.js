// FAILING SOLUTION -- TIME LIMIT EXCEEDED
var minWindow = function(s, t) {
    let res = ''
    
    for (let r = 0; r < s.length; r++) {
        let l = r 
        let substr = ''
        let required = [...t]
        while (required.length > 0 && l < s.length) {
            if (required.includes(s[l])) {
                required = required.filter((c, i) => required.indexOf(s[l]) !== i)
            }
            substr += s[l]
            l++
        }
        if (required.length === 0){
            if (!res.length || substr.length < res.length) res = substr
        } 
    }

    return res
}