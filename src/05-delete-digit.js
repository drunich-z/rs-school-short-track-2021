/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  const arrToSort = [];
  for (let i = 0; i < arr.length; i++) {
    arrToSort.push(Number((arr.slice(0, i) + arr.slice(i + 1, arr.length)).split(',').join('')));
  }
  return arrToSort.sort((a, b) => (a - b))[arrToSort.length - 1];
}

module.exports = deleteDigit;
