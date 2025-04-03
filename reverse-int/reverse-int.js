/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) return 0;

  const isNegative = x < 0;

  var revStringWithZeroes = x.toString().replace("-", "").split("").reverse();
  var firstNonZeroIndex = revStringWithZeroes.findIndex((n) => n != 0);

  var revString = revStringWithZeroes.splice(
    0 + firstNonZeroIndex,
    revStringWithZeroes.length
  );

  const maxNumArr = isNegative
    ? (2 ** 31).toString().split("")
    : (2 ** 31 - 1).toString().split("");

  if (revString.length > maxNumArr.length) return 0;

  if (revString.length === maxNumArr.length) {
    for (let i = 0; i < revString.length; i++) {
      if (revString[i] > maxNumArr[i]) return 0;
      if (revString[i] < maxNumArr[i]) break;
    }
  }

  var revInt = Number(revString.join(""));

  return isNegative ? -revInt : revInt;
};

console.log(reverse(123));
