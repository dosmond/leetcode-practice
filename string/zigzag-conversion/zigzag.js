
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  const result = [];
  const cycleLen = 2 * numRows - 2; // This is the length of one complete cycle

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < s.length; j += cycleLen) {
      // Add the character from the downward movement
      result.push(s[j + i]);

      // For middle rows, add the character from the upward movement
      if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < s.length) {
        result.push(s[j + cycleLen - i]);
      }
    }
  }

  return result.join("");
};

console.log(convert("ABC", 2));
