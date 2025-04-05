/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeterBfs = function (grid) {
  let queue = [];

  for (let row = 0; row < grid.length; row++) {
    if (queue.length > 0) break;

    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        queue.push([row, col]);
        break;
      }
    }
  }

  let perimeter = 0;

  const seen = new Set();

  while (queue.length > 0) {
    var [row, col] = queue.shift();

    if (seen.has(`${row},${col}`)) continue;

    seen.add(`${row},${col}`);

    // Top
    if (row - 1 >= 0 && grid[row - 1][col] === 1) {
      queue.push([row - 1, col]);
    } else perimeter++;

    // Right
    if (col + 1 < grid[row].length && grid[row][col + 1] === 1)
      queue.push([row, col + 1]);
    else perimeter++;

    // Bottom
    if (row + 1 < grid.length && grid[row + 1][col] === 1)
      queue.push([row + 1, col]);
    else perimeter++;

    // Left
    if (col - 1 >= 0 && grid[row][col - 1] === 1) 
      queue.push([row, col - 1]);
    else perimeter++;
  }

  return perimeter;
};

var islandPerimeter = function(grid) {
    let perimeter = 0;
    
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        // Skip water cells
        if (grid[row][col] === 0) continue;
        
        // For each land cell, add 4 sides to perimeter
        perimeter += 4;
        
        // Check adjacent cells and subtract 1 for each adjacent land cell
        
        // Check cell above
        if (row > 0 && grid[row-1][col] === 1) {
          perimeter -= 1;
        }
        
        // Check cell below
        if (row < grid.length - 1 && grid[row+1][col] === 1) {
          perimeter -= 1;
        }
        
        // Check cell to the left
        if (col > 0 && grid[row][col-1] === 1) {
          perimeter -= 1;
        }
        
        // Check cell to the right
        if (col < grid[row].length - 1 && grid[row][col+1] === 1) {
          perimeter -= 1;
        }
      }
    }
    
    return perimeter;
  };

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);

console.log(islandPerimeter([[1]]));

console.log(islandPerimeter([[1, 0]]));

console.log(
  islandPerimeter([
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  ])
);
