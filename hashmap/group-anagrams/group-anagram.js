/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 1) {
    return [[strs[0]]];
  }

  const result = [];
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split("").sort().join("");

    if (!map.has(sorted)) map.set(sorted, []);
    map.set(sorted, [...map.get(sorted), strs[i]]);
  }

  for (const value of map.values()) {
    result.push(value);
  }

  return result;
};

console.log(groupAnagrams(["", "", ""]));
