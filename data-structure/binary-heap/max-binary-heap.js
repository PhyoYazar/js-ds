class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // (n) is index
  // left   => 2n + 1
  // right  => 2n + 2
  //        => Math.floor((n - 1) / 2)

  insert(value) {
    this.values.push(value);

    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];

      if (element <= parent) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const lastValue = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = lastValue;
      this.syncDown();
    }

    return max;
  }

  syncDown() {
    let parentIdx = 0;
    let leftIdx = 1;
    let rightIdx = 2;

    while (leftIdx < this.values.length) {
      const parent = this.values[parentIdx];
      const left = this.values[leftIdx];
      const right = this.values[rightIdx];

      if (left && right) {
        const maxIdx = left > right ? leftIdx : rightIdx;

        this.values[parentIdx] = this.values[maxIdx];
        this.values[maxIdx] = parent;

        parentIdx = maxIdx;
        leftIdx = 2 * maxIdx + 1;
        rightIdx = 2 * maxIdx + 2;
        //
      } else if (left && !right) {
        if (left < parent) break;

        this.values[parentIdx] = this.values[leftIdx];
        break;
        //
      } else {
        break;
      }
    }
  }

  //   syncDown() {
  //     let idx = 0;
  //     const length = this.values.length;
  //     const element = this.values[0];

  //     while (true) {
  //       let leftChildIdx = 2 * idx + 1;
  //       let rightChildIdx = 2 * idx + 2;
  //       let leftChild, rightChild;
  //       let swap = null;

  //       if (leftChildIdx < length) {
  //         leftChild = this.values[leftChildIdx];

  //         if (leftChild > element) {
  //           swap = leftChildIdx;
  //         }
  //       }

  //       if (rightChildIdx < length) {
  //         rightChild = this.values[rightChildIdx];

  //         if (
  //           (swap === null && rightChild > element) ||
  //           (swap !== null && rightChild > leftChild)
  //         ) {
  //           swap = rightChildIdx;
  //         }
  //       }

  //       if (swap === null) break;
  //       this.values[idx] = this.values[swap];
  //       this.values[swap] = element;
  //       idx = swap;
  //     }
  //   }
}

const heap = new MaxBinaryHeap();

heap.insert(40);
heap.insert(18);
heap.insert(22);
// heap.insert(4);
// heap.insert(19);
// heap.insert(39);
// heap.insert(29);

console.log(heap);

heap.extractMax();

console.log(heap);

heap.extractMax();

console.log(heap);
