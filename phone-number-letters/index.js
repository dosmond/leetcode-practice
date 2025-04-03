const numMap = new Map([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]]
])

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return [];

    const mappedDigits = digits.split("").map((d) => numMap.get(d));
    
    // Start with an empty string in our queue
    let queue = [""];
    
    for(let i = 0; i < mappedDigits.length; i++) {
        var letters = mappedDigits[i];
        var queueLenth = queue.length;
        

        for(let j = 0; j < queueLenth; j++) {
            var currentLetter = queue.shift();

            for(let k = 0; k < letters.length; k++) {
                queue.push(currentLetter + letters[k])
            }
        }
    }

    return queue;
};

console.log(letterCombinations("233"));
// console.log(letterCombinations(""));
// console.log(letterCombinations("2"));