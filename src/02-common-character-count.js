/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const intersectionS1S2 = [];
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let index = -1;
  for (let i = 0; i < arr1.length; i++) {
    index = arr2.indexOf(arr1[i]);
    if (index !== -1) {
      intersectionS1S2.push(arr2[index]);
      delete arr2[index];
    }
  }
  return intersectionS1S2.length;
}

module.exports = getCommonCharacterCount;
