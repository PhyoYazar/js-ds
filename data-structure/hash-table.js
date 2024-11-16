class HashTable {
  constructor(value = 5) {
    this.buckets = new Array(value);
  }

  hashFunc(key) {
    const PRIME = 31;
    let hashValue = 0;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const value = key[i].charCodeAt(0) - 96;
      hashValue = (hashValue * PRIME + value) % this.buckets.length;
    }

    return hashValue;
  }

  set(key, value) {
    const hashIdx = this.hashFunc(key);

    if (!this.buckets[hashIdx]) {
      this.buckets[hashIdx] = [];
    }

    this.buckets[hashIdx].push([key, value]);
  }

  get(key) {
    const hashIdx = this.hashFunc(key);
    const foundValue = this.buckets.at(hashIdx);

    // [null, [1,2], null, null, [ [2,2],[3,3] ], null]

    if (!foundValue) return undefined;

    if (!Array.isArray(foundValue.at(0))) return foundValue.at(1);

    if (Array.isArray(foundValue.at(0)))
      for (let i = 0; i < foundValue.length; i++) {
        if (foundValue.at(i).at(0) === key) {
          return foundValue.at(i).at(1);
        }
      }

    return undefined;
  }

  keys() {
    return this.traverse("key");
  }

  values() {
    return this.traverse("value");
  }

  traverse(type) {
    let index;

    if (type === "key") index = 0;
    else if (type === "value") index = 1;
    else return undefined;

    const result = [];

    for (let i = 0; i < this.buckets.length; i++) {
      const value = this.buckets.at(i);

      if (value) {
        for (let j = 0; j < value.length; j++) {
          result.push(value.at(j).at(index));
        }
      }
    }

    return result;
  }
}

const hash = new HashTable();

hash.set("red", "Red");
hash.set("red", "Red2 ");
hash.set("blue", "Blue");
// hash.set("green", "Green");
// hash.set("cyan", "Cyan");
// hash.set("gray", "Gray");
// hash.set("orange", "Orange");
// hash.set("yellow", "Yellow");
// hash.set("black", "Black");

// console.log(hash);
console.log(hash.get("red"));

// console.log(hash.keys());
console.log(hash.values());
