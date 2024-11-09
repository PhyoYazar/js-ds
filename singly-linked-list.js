class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  shift() {
    if (!this.head) return undefined;

    const shiftValue = this.head;
    this.head = shiftValue.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return shiftValue;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let previousNode = current;

    while (current.next) {
      previousNode = current;
      current = current.next;
    }

    this.tail = previousNode;
    this.tail.next = null;
    this.length--;

    if (this.length == 0) {
      this.head = this.tail = null;
    }

    return current;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, value) {
    const updNode = this.get(index);

    if (!updNode) return false;

    updNode.value = value;

    return true;
  }

  traverse() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const greetings = new SinglyLinkedList();
greetings.push("Hello").push("Hi").push("Hay");
// greetings.push("Hello");

// greetings.unshift("Hii");

// console.log(greetings.get(1));

console.log(greetings.set(1, "Hiiiiii"));

// greetings.shift();

// greetings.pop();

// greetings.traverse();

console.log(greetings);
