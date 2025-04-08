/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  var minLen = Number.MAX_SAFE_INTEGER;

  let left = 0;
  let right = 0;

  let currValue = nums[0];

  while (right < nums.length) {
    if (currValue >= target) minLen = Math.min(minLen, right - left + 1);

    if (currValue < target) {
      right++;
      if (right < nums.length) {
        currValue += nums[right];
      }
    } else {
      currValue -= nums[left];
      left++;
    }
  }

  return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
