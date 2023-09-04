var maxProfit = function(prices) {
    let l = 0, r = 1, maxP = 0

    while (r < prices.length) {
        const profit = prices[r] - prices[l]
        maxP = Math.max(maxP, profit)
        if (profit < 0) {
            l = r //we've found a new low
        }
        r++
    }

    return maxP
};