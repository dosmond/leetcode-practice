/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // Helper function to find the first or last position
  const findPosition = (nums, target, findFirst) => {
    let start = 0;
    let end = nums.length - 1;
    let position = -1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (nums[mid] < target) {
        start = mid + 1;
      } else if (nums[mid] > target) {
        end = mid - 1;
      } else {
        // Found target, but need to check if it's the first/last occurrence
        position = mid;

        if (findFirst) {
          // For first position, continue searching in the left half
          end = mid - 1;
        } else {
          // For last position, continue searching in the right half
          start = mid + 1;
        }
      }
    }

    return position;
  };

  // Find first and last positions using the helper function
  const firstPosition = findPosition(nums, target, true);

  // If target doesn't exist in the array, return [-1, -1]
  if (firstPosition === -1) {
    return [-1, -1];
  }

  const lastPosition = findPosition(nums, target, false);
  return [firstPosition, lastPosition];
};

// Test cases
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
console.log(searchRange([], 0)); // [-1, -1]
console.log(searchRange([1, 1, 1, 1, 1, 1, 1], 1)); // [0, 6]
