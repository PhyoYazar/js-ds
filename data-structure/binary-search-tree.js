class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    //  this.count = 1;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  find(value) {
    if (!this.root) return false;

    let currentNode = this.root;

    while (currentNode) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
      //
      else if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
      //
      else {
        return currentNode;
      }
    }

    return false;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return true;
    }

    let currentNode = this.root;

    // Loop
    while (true) {
      if (value === currentNode.value) {
        //   currentNode.count++;
        return this;
      }

      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }

        currentNode = currentNode.right;
      }

      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }

        currentNode = currentNode.left;
      }
    }

    //  // Recursive
    //  const helper = (value, currentNode) => {
    //    if (value === currentNode.value) {
    //      currentNode.count++;
    //      return this;
    //    }

    //    if (value > currentNode.value) {
    //      if (!currentNode.right) {
    //        currentNode.right = newNode;
    //        return this;
    //      }
    //      return helper(value, currentNode.right);
    //    }

    //    if (value < currentNode.value) {
    //      if (!currentNode.left) {
    //        currentNode.left = newNode;
    //        return this;
    //      }
    //      return helper(value, currentNode.left);
    //    }
    //  };

    //  return helper(value, this.root);
  }

  // Helper function to find the minimum value in a subtree
  findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  // Remove method
  remove(value, node = this.root, parent = null) {
    if (!node) return false; // Node not found

    // Traverse the tree to find the node to remove
    if (value < node.value) {
      // Recur left if the value is smaller
      return this.remove(value, node.left, node);
    } else if (value > node.value) {
      // Recur right if the value is larger
      return this.remove(value, node.right, node);
    } else {
      // Node found: handle three cases

      // Case 1: Node has no children (leaf node)
      if (!node.left && !node.right) {
        if (parent === null) {
          this.root = null; // Tree had only one node
        } else if (parent.left === node) {
          parent.left = null;
        } else {
          parent.right = null;
        }

        // Case 2: Node has one child
      } else if (!node.left) {
        if (parent === null) {
          this.root = node.right; // Node is root
        } else if (parent.left === node) {
          parent.left = node.right;
        } else {
          parent.right = node.right;
        }
      } else if (!node.right) {
        if (parent === null) {
          this.root = node.left; // Node is root
        } else if (parent.left === node) {
          parent.left = node.left;
        } else {
          parent.right = node.left;
        }

        // Case 3: Node has two children
      } else {
        const successor = this.findMin(node.right); // Find in-order successor
        const successorValue = successor.value;
        this.remove(successorValue, node.right, node); // Remove the successor
        node.value = successorValue; // Replace node’s value with successor’s value
      }
      return true;
    }
  }

  // Helper function for in-order traversal (for testing)
  inOrderTraversal(node = this.root, result = []) {
    if (!node) return result;
    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);
    return result;
  }
}

const tree = new BinarySearchTree();

// tree.insert(5);
// tree.insert(7);
// tree.insert(7);
// tree.insert(5);
// tree.insert(6);
// tree.insert(3);
// tree.insert(4);
// tree.insert(5);

tree.insert(20);
tree.insert(12);
tree.insert(7);
tree.insert(9);
tree.insert(5);
tree.insert(6);
tree.insert(2);
tree.insert(15);
tree.insert(25);
tree.insert(4);

// console.log(tree.find(1));
// console.log(tree.find(100));
// console.log(tree.find(5));
// console.log(tree.find(3));

console.log(tree.inOrderTraversal());
console.log(tree.remove(5));
console.log(tree.inOrderTraversal());

console.log(tree.find(7));
// console.log(tree.root.right.left);
