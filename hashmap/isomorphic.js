/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphicOriginal = function (s, t) {
  const charMap = {};
  const tCharMap = {};

  for (let i = 0; i < s.length; i++) {
    if (!charMap[s[i]]) charMap[s[i]] = [];
    if (!tCharMap[t[i]]) tCharMap[t[i]] = [];

    charMap[s[i]].push(i);
    tCharMap[t[i]].push(i);

    var len = charMap[s[i]].length;

    for (let j = 0; j < len; j++) {
      if (charMap[s[i]][j] !== tCharMap[t[i]][j]) return false;
    }
  }

  return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const sCharMap = new Map();
  const tCharMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!sCharMap.has(s[i])) sCharMap.set(s[i], t[i]);
    else if (sCharMap.get(s[i]) !== t[i]) return false;

    if (!tCharMap.has(t[i])) tCharMap.set(t[i], s[i]);
    else if (tCharMap.get(t[i]) !== s[i]) return false;
  }

  return true;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));

// paper
/**
 * {
 *  p : [0, 2]
 *  a : [1],
 *  e : [3]
 *  r : [4]
 * }
 */
