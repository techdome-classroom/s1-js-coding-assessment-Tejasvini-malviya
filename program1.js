const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  const floodFill = (r, c) => {
      visited[r][c] = true;
      const directions = [
          [1, 0], [-1, 0], [0, 1], [0, -1]
      ];

      for (const [dr, dc] of directions) {
          const newRow = r + dr;
          const newCol = c + dc;
          if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
              if (grid[newRow][newCol] === 'L' && !visited[newRow][newCol]) {
                  floodFill(newRow, newCol);
              }
          }
      }
  };

  let islandCount = 0;

  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 'L' && !visited[r][c]) {
              floodFill(r, c);
              islandCount++;
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;
