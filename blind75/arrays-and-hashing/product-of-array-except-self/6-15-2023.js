var productExceptSelf = function(nums) {
    //return an array where each element represents the product of all other elements in the array
    //
    let prefix = 1
    let postfix = 1
    const output = new Array(nums.length).fill(1)

    for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
        output[i] *= prefix
        prefix *= nums[i]    

        output[j] *= postfix
        postfix *= nums[j]  
    }
    return output
};