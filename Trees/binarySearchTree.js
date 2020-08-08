class LeaveNode {
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
    const leaveNode = new LeaveNode(value);
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
    if (!this.root) {
      return "This tree is empty";
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else if (value < currentNode.value) {
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

  breadthFirstSearch = () => {
    const list = [];
    const queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  };
}

const Tree = new BinarySearchTree();
Tree.insert(9);
Tree.insert(4);
Tree.insert(6);
Tree.insert(20);
Tree.insert(170);
Tree.insert(15);
Tree.insert(1);
// console.log(Tree.lookup(60));
// console.log(Tree.breadthFirstSearch());

console.log(Tree);
