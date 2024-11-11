class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return undefined;

    const removeNode = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    removeNode.next = null;
    return removeNode;
  }
}

const workerPool = new Queue();

// workerPool.enqueue("task 1");
// workerPool.enqueue("task 2");
workerPool.enqueue("task 3");

console.log(workerPool.dequeue());

console.log(workerPool);
