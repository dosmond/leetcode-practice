/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;

    let max = 0;

    while(left < right) {
        const area = Math.min(height[left], height[right]) * (right - left)
        max = Math.max(area, max)

        if(height[left] <= height[right]) {
            left++
        } else {
            right--
        }
    }

    return max
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))