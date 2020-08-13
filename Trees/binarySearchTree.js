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
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return list;
  };

  breadthFirstSearchR = (queue = [this.root], list = []) => {
    if (!queue.length) return list;
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
    return this.breadthFirstSearchR(queue, list);
  };

  dfsInOrder = (root = this.root, list = []) => {
    if (!root) return;
    this.dfsInOrder(root.left, list);
    list.push(root.value);
    this.dfsInOrder(root.right, list);
    return list;
  };

  dfsPreOrder = (root = this.root, list = []) => {
    if (!root) return;
    list.push(root.value);
    this.dfsPreOrder(root.left, list);
    this.dfsPreOrder(root.right, list);
    return list;
  };

  dfsPostOrder = (root = this.root, list = []) => {
    if (!root) return;
    this.dfsPostOrder(root.left, list);
    this.dfsPostOrder(root.right, list);
    list.push(root.value);
    return list;
  };
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(tree.lookup(60));
// console.log(tree.breadthFirstSearch());
// console.log(tree.breadthFirstSearchR());
console.log(tree.dfsInOrder());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());

// console.log(tree);
