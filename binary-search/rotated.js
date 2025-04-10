/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Found target
    if (nums[mid] === target) {
      return mid;
    }

    // Check if left half is sorted
    if (nums[left] <= nums[mid]) {
      // Check if target is in the left half
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // Search left half
      } else {
        left = mid + 1; // Search right half
      }
    }
    // Right half is sorted
    else {
      // Check if target is in the right half
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // Search right half
      } else {
        right = mid - 1; // Search left half
      }
    }
  }

  return -1; // Target not found
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([5, 1, 2, 3, 4], 4));
console.log(search([4, 5, 6, 7, 0], 0));
console.log(search([7, 0, 1, 2, 3, 4, 5], 0));
console.log(search([8, 1, 2, 3, 4, 5, 6, 7], 6));
