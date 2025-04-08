/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longestSubstringLength = 0;
  let left = 0;
  let right = 0;

  let lettersSeen = new Set();

  while (left <= s.length - 1 && right <= s.length - 1) {
    if (lettersSeen.has(s[right])) {
      while (left <= right && lettersSeen.has(s[right])) {
        lettersSeen.delete(s[left]);
        left++;
      }
    } else {
      lettersSeen.add(s[right]);
      right++;
    }

    longestSubstringLength = Math.max(longestSubstringLength, lettersSeen.size);
  }

  return longestSubstringLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
