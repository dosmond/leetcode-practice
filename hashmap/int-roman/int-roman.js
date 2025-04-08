const romanMap = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
]);

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let numStr = num.toString();
    let currentIndex = numStr.length - 1;

    var roman = [];

    var tensPlace = 1;

    while(currentIndex >= 0) {

        var baseNum = Number(numStr[currentIndex])
        var currNum = baseNum * tensPlace;

        var textToPrepend = ""

        if(baseNum <= 3) {
            textToPrepend = romanMap.get(tensPlace).repeat(baseNum)
        } else if(baseNum > 5 && baseNum < 9) {
            textToPrepend = romanMap.get(5 * tensPlace) + romanMap.get(1 * tensPlace).repeat(baseNum % 5)
        } else {
            textToPrepend = romanMap.get(currNum)
        }

        roman.unshift(textToPrepend)

        currentIndex--
        tensPlace *= 10

    }

    return roman.join("")
};


console.log(intToRoman(3749))