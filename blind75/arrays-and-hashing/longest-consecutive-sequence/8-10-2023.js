var longestConsecutive = function(nums) {
    //0(n log n) - sort nums, count longest sequence
    //0(n) - use set to check for consecutive numbers

    const numSet = new Set(nums)
    let longest = 0

    for (let num of nums) {
        //determine if num is start of sequence
        if (!numSet.has(num - 1)) {
            let length = 0
            //count how long sequence
            while (numSet.has(num + length)) {
                length++
            }
            //check if sequence is longer longest
            if (length > longest) longest = length
        }   
    }
    return longest
};