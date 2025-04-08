/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var len = s.length;

  if (len === 0) return 0;

  let longestSub = 0;

  let left = 0;
  let right = 1;

  let seen = new Set();

  seen.add(s[left]);

  longestSub = Math.max(longestSub, seen.size);

  while (right < len) {
    if (!seen.has(s[right])) {
      seen.add(s[right]);
      longestSub = Math.max(longestSub, seen.size);
      right++;
    } else {
      while (seen.has(s[right])) {
        seen.delete(s[left]);
        left++;
      }
      seen.add(s[right]);
      right++;
    }
  }

  return longestSub;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
