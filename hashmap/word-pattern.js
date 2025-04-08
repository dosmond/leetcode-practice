/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const wordToLetterMap = new Map();
  const letterToWordMap = new Map();

  const sArray = s.split(" ");

  if (pattern.length != sArray.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!letterToWordMap.has(pattern[i]))
      letterToWordMap.set(pattern[i], sArray[i]);
    else if (letterToWordMap.get(pattern[i]) !== sArray[i]) return false;

    if (!wordToLetterMap.has(sArray[i]))
      wordToLetterMap.set(sArray[i], pattern[i]);
    else if (wordToLetterMap.get(sArray[i]) !== pattern[i]) return false;
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
