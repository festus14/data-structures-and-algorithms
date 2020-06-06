class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const leaveNode = new Node(value);
    if (!this.root) {
      return (this.root = leaveNode);
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return (currentNode.left = leaveNode);
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return (currentNode.right = leaveNode);
        }
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;
    if (!this.root) {
      return "This tree is empty";
    }
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return "Value not found";
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return "Value not found";
        }
      }
    }
  }
}

const Tree = new BinarySearchTree();
Tree.insert(9);
Tree.insert(4);
Tree.insert(6);
Tree.insert(20);
Tree.insert(170);
Tree.insert(15);
Tree.insert(1);
// console.warn(Tree.lookup(60));

console.warn(Tree);
