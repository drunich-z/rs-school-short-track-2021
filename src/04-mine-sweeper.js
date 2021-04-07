/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function getNumberOfMinesAround(arr, x, y) {
  const minesCountAround = 0
    + ((x === 0) || (arr[x - 1][y - 1] === undefined) ? 0 : Number(arr[x - 1][y - 1]))
    + ((x === 0) || (arr[x - 1][y] === undefined) ? 0 : Number(arr[x - 1][y]))
    + ((x === 0) || (arr[x - 1][y + 1] === undefined) ? 0 : Number(arr[x - 1][y + 1]))
    + ((arr[x][y - 1] === undefined) ? 0 : Number(arr[x][y - 1]))
    + ((arr[x][y + 1] === undefined) ? 0 : Number(arr[x][y + 1]))
    + ((x === (arr.length - 1)) || (arr[x + 1][y - 1] === undefined)
      ? 0 : Number(arr[x + 1][y - 1]))
    + ((x === (arr.length - 1)) || (arr[x + 1][y] === undefined) ? 0 : Number(arr[x + 1][y]))
    + ((x === (arr.length - 1)) || (arr[x + 1][y + 1] === undefined)
      ? 0 : Number(arr[x + 1][y + 1]));
  return minesCountAround;
}

function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      result[i][j] = getNumberOfMinesAround(matrix, i, j);
    }
  }
  return result;
}

module.exports = minesweeper;
