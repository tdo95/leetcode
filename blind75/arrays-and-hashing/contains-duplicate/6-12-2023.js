//find presence of duplicates
    //input => arr
    //output => bool (true if duplicates)
    //[23,23,1, 2] => true
    //[1,2,3,4] => false
    
    // 0(n2) - for each item, check every other item

    // 0(n) - use cache/map to track presence of item
    let seen = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (seen[num]) return true
        seen[num] = true
    }
    return false