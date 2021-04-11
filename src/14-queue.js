const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.capacity = 0;
  }

  get size() {
    return this.capacity;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    newNode.value = element;
    if (this.start === null) {
      this.start = newNode;
      this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
    this.capacity++;
  }

  dequeue() {
    const temp = this.start;
    this.start = this.start.next;
    this.capacity--;
    temp.next = null;
    return temp.value;
  }
}

module.exports = Queue;
