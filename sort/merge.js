/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let temp = [];

  let left = 0;
  let right = 0;

  while (left < m && right < n) {
    if (nums1[left] <= nums2[right]) {
      temp.push(nums1[left]);
      left++;
    } else {
      temp.push(nums2[right]);
      right++;
    }
  }

  while (left < m) {
    temp.push(nums1[left]);
    left++;
  }

  while (right < n) {
    temp.push(nums2[right]);
    right++;
  }

  nums1.forEach((_, i) => {
    nums1[i] = temp[i];
  });
};

let array = [1, 2, 3, 0, 0, 0];

merge(array, 3, [2, 5, 6], 3);
