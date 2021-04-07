/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortArr = arr.filter((v) => v !== -1).sort((a, b) => a - b);
  const a = arr;
  let j = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) a[i] = sortArr[j++];
  }
  return a;
}

module.exports = sortByHeight;
