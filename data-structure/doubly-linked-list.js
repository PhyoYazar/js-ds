// example => DLL is good in Browser History routing strategy
// TIME / SPACE (more memory)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let removeNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newTailNode = removeNode.prev;
      newTailNode.next = null;
      this.tail = newTailNode;

      removeNode.prev = null;
    }

    this.length--;
    return removeNode;
  }

  shift() {
    if (this.length === 0) return undefined;

    let removeNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHeadNode = removeNode.next;
      newHeadNode.prev = null;
      this.head = newHeadNode;

      removeNode.next = null;
    }

    this.length--;

    return removeNode;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let counter, current;
    // let count = 1;

    // I can use this search with fully divide and conquer (binary search) algorithm,
    // So searching in DLL will be Big O(log n) instead of 0(N)

    if (this.length / 2 < index + 1) {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
        // count++;
      }
    } else {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
        // count++;
      }
    }
    // console.log(count);

    return current;
  }

  set(index, value) {
    const updNode = this.get(index);

    if (updNode) updNode.value = value;

    return !!updNode;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const afterNode = this.get(index);
    const beforeNode = afterNode.prev;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (afterNode.prev = newNode), (newNode.next = afterNode);
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removeNode = this.get(index);
    const beforeNode = removeNode.prev;
    const afterNode = removeNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removeNode.next = null;
    removeNode.prev = null;
    this.length--;

    return removeNode;
  }

  print() {
    let arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

const numbers = new DoublyLinkedList();
numbers.push(1).push(2).push(3).push(4).push(5);
// numbers.push(1);

// numbers.print();

// numbers.unshift(11);

// console.log(numbers.shift());

// console.log(numbers.pop());

// console.log(numbers.set(4, 22));

// console.log(numbers.get(1));

// console.log(numbers.insert(3, 1111));

console.log(numbers.remove(1));

numbers.print();
// console.log(numbers);
