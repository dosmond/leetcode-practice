/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrixOriginal = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  if (target < matrix[0][0]) return false; // Less than smallest
  if (target > matrix[m - 1][n - 1]) return false; // Greater than largest

  let lRow = 0;
  let rRow = m - 1;

  while (lRow <= rRow) {
    let midRow = Math.floor((rRow + lRow) / 2);

    if (target >= matrix[midRow][0] && target <= matrix[midRow][n - 1]) {
      // begin BS on row
      let lCol = 0;
      let rCol = n - 1;

      while (lCol <= rCol) {
        let midCol = Math.floor((rCol + lCol) / 2);

        let val = matrix[midRow][midCol];
        console.log(lCol, rCol, midCol, val, matrix[midRow]);

        if (val === target) return true;
        else if (val < target) lCol = midCol + 1;
        else rCol = midCol - 1;
      }

      return false;
    } else if (matrix[midRow][0] < target) lRow = midRow + 1;
    else rRow = midRow - 1;
  }

  return false;
};

// This is the preferred way. Treat the 2d array as a flattened sorted array
// Calculate the col and row as you go.
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  if (target < matrix[0][0]) return false; // Less than smallest
  if (target > matrix[m - 1][n - 1]) return false; // Greater than largest

  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let col = mid % n;
    let row = Math.floor(mid / n);

    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] < target) left = mid + 1;
    else right = mid - 1;
  }

  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
); // Expected: true

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
    ],
    13
  )
); // Expected: false
