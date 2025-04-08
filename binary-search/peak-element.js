/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElementSlow = function (nums) {
  if (nums.length === 1) return 0;

  let queue = [1, 2];

  while (queue.length) {
    const idx = queue.shift();

    const num = nums[idx];

    const right =
      idx + 1 >= nums.length ? Number.MIN_SAFE_INTEGER : nums[idx + 1];
    const left = idx - 1 < 0 ? Number.MIN_SAFE_INTEGER : nums[idx - 1];

    if (left < num && right < num) return idx;

    const newIndex = idx + 2;

    if (newIndex < nums.length) queue.push(newIndex);
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1) return 0;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let val = nums[mid];

    let lVal = mid - 1 < 0 ? Number.MIN_SAFE_INTEGER : nums[mid - 1];
    let rVal = mid + 1 >= nums.length ? Number.MIN_SAFE_INTEGER : nums[mid + 1];

    if (val > lVal && val > rVal) return mid;
    else if (val < rVal) left = mid + 1;
    else right = mid - 1;
  }
};

console.log(findPeakElement([1, 2, 3, 1])); // Expect 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // Expect 5 Or 1
