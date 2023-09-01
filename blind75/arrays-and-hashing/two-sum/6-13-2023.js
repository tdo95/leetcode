var twoSum = function(nums, target) {
    //find two values in array that equal target
    //input => arr, int (target value)
    //output => arr (containing indices that add up to target)

    //iterate thru nums, keep track of needed value for target TC: O(n) SC: O(n)
    const hasNum = {}
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        if (hasNum[n] !== undefined) return [i,hasNum[n]]
        hasNum[target - n] = i
    }
};