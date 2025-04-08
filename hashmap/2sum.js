/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var indexMap = new Map();
  var sumMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (sumMap.has(nums[i])) {
      return [indexMap.get(sumMap.get(nums[i])), i];
    }

    sumMap.set(target - nums[i], nums[i]);
    indexMap.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
