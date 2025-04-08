/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  var sMap = new Map();
  var tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!sMap.has(s[i])) sMap.set(s[i], 0);
    if (!tMap.has(t[i])) tMap.set(t[i], 0);

    sMap.set(s[i], sMap.get(s[i]) + 1);
    tMap.set(t[i], tMap.get(t[i]) + 1);
  }

  for (const [key, value] of sMap.entries()) {
    if (tMap.get(key) !== value) return false;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
