/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let operations = 0;
  let left = 0;

  // Continue until we've processed all elements
  while (left < nums.length) {
    // Check if current window has all distinct elements
    let hasDuplicate = false;
    const windowFreq = new Map();

    // Check elements from left pointer
    for (let i = left; i < nums.length; i++) {
      const num = nums[i];
      windowFreq.set(num, (windowFreq.get(num) || 0) + 1);

      // If we find a duplicate in current window
      if (windowFreq.get(num) > 1) {
        hasDuplicate = true;
        // Remove 3 elements or remaining elements
        const removeCount = Math.min(3, nums.length - left);
        left += removeCount;
        operations++;
        break;
      }
    }

    // If no duplicates found in current window, we're done
    if (!hasDuplicate) {
      break;
    }
  }

  return operations;
};

// Test cases
console.log(minimumOperations([1, 2, 3, 4, 2, 3, 3, 5, 7])); // Expected: 2
console.log(minimumOperations([4, 5, 6, 4, 4])); // Expected: 2
console.log(minimumOperations([6, 7, 8, 9])); // Expected: 0
