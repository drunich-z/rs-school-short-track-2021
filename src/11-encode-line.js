/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let count = 2;
  for (let i = 0; i < str.length; i++) {
    if (i !== str.length - 1 && str[i] === str[i + 1]) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j + 1]) {
          count++;
        } else {
          result += count + str[i];
          count = 2;
          i = j;
          break;
        }
      }
    } else {
      result += str[i];
    }
  }
  return result;
}

module.exports = encodeLine;
