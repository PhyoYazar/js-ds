class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // (n) is index
  // left   => 2n + 1
  // right  => 2n + 2
  //        => Math.floor((n - 1) / 2)

  enqueue(value, priority) {
    const newNode = new Node(value, priority);

    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];

      if (element.priority >= parent.priority) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const lastValue = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = lastValue;
      this.syncDown();
    }

    return min;
  }

  syncDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];

        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const ER = new PriorityQueue();

ER.enqueue("common cold", 1);
ER.enqueue("gunshot", 5);
ER.enqueue("high fever", 2);
ER.enqueue("coma", 4);

console.log(ER);

console.log(ER.dequeue(), ER);
console.log(ER.dequeue(), ER);
console.log(ER.dequeue(), ER);
console.log(ER.dequeue(), ER);
