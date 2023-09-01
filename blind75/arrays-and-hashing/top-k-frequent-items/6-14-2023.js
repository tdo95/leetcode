/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //return an x amount of the most frequent items
    //input => arr (ints)
    //output => arr (top x most frequent)

    //count reoccurences, sort map, return first k values in map TC: O(2n log n) SC: O(n)
    const numCount = new Map()
    for (let num of nums) {
        if (numCount.has(num)) {
            numCount.set(num, numCount.get(num) + 1)
        }
        else numCount.set(num, 1)
    }
    return Array.from(numCount.keys()).sort((a, b) => numCount.get(b) - numCount.get(a)).slice(0, k)



};