/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // Early return if the word is longer than the total number of cells
  if (word.length > board.length * board[0].length) return false;

  // Get dimensions for cleaner code
  const rows = board.length;
  const cols = board[0].length;

  // Optimization 1: Check if all characters in the word exist in the board
  const charCount = new Map();
  // Count characters in the word
  for (let char of word) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Count characters in the board
  const boardChars = new Map();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const char = board[i][j];
      boardChars.set(char, (boardChars.get(char) || 0) + 1);
    }
  }

  // Check if all characters in the word exist in sufficient quantity in the board
  for (let [char, count] of charCount) {
    if (!boardChars.has(char) || boardChars.get(char) < count) {
      return false;
    }
  }

  // Optimization 2: If the first character is rare, start with those positions
  const firstChar = word[0];
  const lastChar = word[word.length - 1];

  // Choose whether to search forward or backward based on character frequency
  const startChar =
    boardChars.get(firstChar) <= boardChars.get(lastChar)
      ? firstChar
      : lastChar;
  const searchWord =
    startChar === firstChar ? word : word.split("").reverse().join("");

  // DFS function to traverse the board
  function dfs(i, j, index) {
    // If we've found all characters, return true
    if (index === searchWord.length) return true;

    // Out of bounds or wrong character check
    if (
      i < 0 ||
      i >= rows ||
      j < 0 ||
      j >= cols ||
      board[i][j] !== searchWord[index]
    ) {
      return false;
    }

    // Mark as visited
    const temp = board[i][j];
    board[i][j] = "#"; // Use a marker instead of a set for visited cells

    // Try all four directions
    const found =
      dfs(i + 1, j, index + 1) ||
      dfs(i - 1, j, index + 1) ||
      dfs(i, j + 1, index + 1) ||
      dfs(i, j - 1, index + 1);

    // Backtrack
    board[i][j] = temp;

    return found;
  }

  // Try starting from each possible position
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === searchWord[0] && dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
