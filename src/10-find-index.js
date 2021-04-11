/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let i = 0;
  let j = array.length - 1;
  let position = -1;
  let mid;

  while (i <= j) {
    mid = Math.floor((i + j) / 2);
    if (array[mid] === value) {
      position = mid;
      break;
    } else if (array[mid] > value) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return position;
}

module.exports = findIndex;
