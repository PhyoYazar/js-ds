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

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);
    const removeNode = prevNode.next;
    prevNode.next = removeNode.next;
    this.length--;

    return removeNode;
  }

  reverse() {
    let currentNode = this.head;

    this.head = this.tail;
    this.tail = currentNode;

    let prevNode = null;
    let nextNode = null;
    let counter = 0;

    while (this.length > counter) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;

      counter++;
    }

    return this;
  }

  print() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    console.log(arr);
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
// greetings.push("Hello").push("Hi").push("Hay");
greetings.push(1).push(2).push(3).push(4);
// greetings.push("Hello");

// greetings.reverse();
greetings.print();

// greetings.unshift("Hii");

// console.log(greetings.get(1));

// greetings.insert(1, "Test");

// console.log(greetings.remove(1));

// console.log(greetings.set(1, "Hiiiiii"));

// greetings.shift();

// greetings.pop();

// greetings.traverse();

// console.log(greetings);
