/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  if (l === null || l === undefined) {
    return null;
  }
  let prev = null;
  let l1 = l;
  let l2 = l;

  do {
    if (l2.value === k) {
      if (l1 === l2) {
        l1 = l2.next;
      } else {
        prev.next = l2.next;
      }
    } else {
      prev = l2;
    }

    l2 = l2.next;
  } while (l2 !== null);
  return l1;
}

module.exports = removeKFromList;
