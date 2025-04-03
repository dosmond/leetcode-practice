/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort();
    var triplets = new Set(); // Using Set to handle duplicates

    for(let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate elements
        if(i > 0 && nums[i] === nums[i-1]) continue;

        let left = i + 1;
        let right = nums.length - 1;
        
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if(sum === 0) {
                triplets.add([nums[i], nums[left], nums[right]]);
                // Skip duplicates for left and right pointers
                while(left < right && nums[left] === nums[left + 1]) left++;
                while(left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if(sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    // Convert Set to array of arrays
    return Array.from(triplets).map(triplet => Array.from(triplet));
};

console.log(threeSum([0,0,0]))