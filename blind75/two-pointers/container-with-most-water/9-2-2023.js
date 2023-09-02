var maxArea = function(height) {
    let l = 0
    let r = height.length - 1
    let area = 0

    while (l < r) {
        const currentSize = (r - l) * Math.min(height[l], height[r])
        if (currentSize > area) area = currentSize

        if (height[l] > height[r]) r--
        else l++
    }

    return area


    
};