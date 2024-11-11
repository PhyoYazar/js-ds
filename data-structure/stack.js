// example => browser history, routing, control+Z action (undo/redo)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // this 'push' add the first/latest place of the stack
  push(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  // this `pop` is remove the first/latest one come into the stack
  pop() {
    if (this.size === 0) return undefined;

    const firstNode = this.first;
    if (this.size === 1) {
      this.last = null;
    }

    this.first = firstNode.next;
    this.size--;

    firstNode.next = null;
    return firstNode.value;
  }
}

const stacks = new Stack();
stacks.push("first");
// stacks.push("second");
// console.log(stacks.push("third"));
console.log(stacks.pop());
console.log(stacks.pop());

// console.log(stacks);
