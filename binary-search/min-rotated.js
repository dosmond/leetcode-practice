/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;

  if (nums[left] < nums[right]) return nums[left];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let l = mid - 1 < 0 ? null : mid - 1;
    let r = mid + 1 >= nums.length ? null : mid + 1;

    if (r !== null && nums[r] < nums[mid]) return nums[r];
    if (l !== null && nums[mid] < nums[l]) return nums[mid];

    if (nums[left] < nums[mid]) {
      // Assume rotation is on right side
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};

console.log(findMin([3, 4, 5, 1, 2])); // Expect 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Expect 0
console.log(findMin([11, 13, 15, 17])); // Expect 11

/**
 * Alternative implementation that handles all edge cases
 * @param {number[]} nums
 * @return {number}
 */
var findMinAlternative = function (nums) {
  // If array has only one element
  if (nums.length === 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;

  // If array is not rotated (or rotated n times)
  if (nums[left] < nums[right]) return nums[left];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // If mid element is greater than rightmost element,
    // minimum must be in the right half
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    }
    // If mid element is less than or equal to rightmost element,
    // minimum must be in the left half or at mid itself
    else {
      right = mid;
    }
  }

  // When left === right, we've found the minimum
  return nums[left];
};

/// This is me fighting with AI to prove my solution is correct lol

// Test alternative solution
console.log("Alternative solution:");
console.log(findMinAlternative([3, 4, 5, 1, 2])); // Expect 1
console.log(findMinAlternative([4, 5, 6, 7, 0, 1, 2])); // Expect 0
console.log(findMinAlternative([11, 13, 15, 17])); // Expect 11

// Edge case tests
console.log("\nEdge Cases:");
const edgeCase1 = [2, 1]; // Simplest rotation
console.log("Edge Case [2, 1]:");
console.log("Original solution:", findMin(edgeCase1)); // Expect 1
console.log("Alternative solution:", findMinAlternative(edgeCase1)); // Expect 1

const edgeCase2 = [4, 5, 1, 2, 3]; // Rotated once from right
console.log("Edge Case [4, 5, 1, 2, 3]:");
console.log("Original solution:", findMin(edgeCase2)); // Expect 1
console.log("Alternative solution:", findMinAlternative(edgeCase2)); // Expect 1

// More challenging edge cases
const edgeCase3 = [3, 1, 2]; // Rotated once from right
console.log("Edge Case [3, 1, 2]:");
console.log("Original solution:", findMin(edgeCase3)); // Expect 1
console.log("Alternative solution:", findMinAlternative(edgeCase3)); // Expect 1

// A case where the inflection point is at the middle
const edgeCase4 = [7, 8, 1, 2, 3, 4, 5, 6];
console.log("Edge Case [7, 8, 1, 2, 3, 4, 5, 6]:");
console.log("Original solution:", findMin(edgeCase4)); // Expect 1
console.log("Alternative solution:", findMinAlternative(edgeCase4)); // Expect 1

// A case that might cause issues for the original implementation's adjacent element checks
const edgeCase5 = [4, 5, 6, 7, 8, 9, 1, 2];
console.log("Edge Case [4, 5, 6, 7, 8, 9, 1, 2]:");
console.log("Original solution:", findMin(edgeCase5)); // Expect 1
console.log("Alternative solution:", findMinAlternative(edgeCase5)); // Expect 1

// An extreme case with many elements
const edgeCase6 = [...Array(100).keys()].map((i) => (i + 50) % 100); // [50, 51, ..., 99, 0, 1, ..., 49]
console.log("Edge Case [50, 51, ..., 99, 0, 1, ..., 49]:");
console.log("Original solution:", findMin(edgeCase6)); // Expect 0
console.log("Alternative solution:", findMinAlternative(edgeCase6)); // Expect 0
