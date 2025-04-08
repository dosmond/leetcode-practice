/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let charMap = new Map();

  for (let i = 0; i < magazine.length; i++) {
    if (!charMap.get(magazine[i])) charMap.set(magazine[i], 0);

    charMap.set(magazine[i], charMap.get(magazine[i]) + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!charMap.has(ransomNote[i]) || charMap.get(ransomNote[i]) === 0)
      return false;

    charMap.set(ransomNote[i], charMap.get(ransomNote[i]) - 1);
  }

  return true;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
