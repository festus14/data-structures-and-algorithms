class Node {
  constructor(val) {
    return {
      value: val,
      next: null,
    };
  }
}

class LinkedList {
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
  }

  appendNode = (val) => {
    let newNode = new Node(val);
    this.tail.next = newNode;
    this.tail = newNode;
  };

  countNumOfNodes = () => {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  };

  returnMiddleLinkedList = () => {
    let count = Math.floor(this.countNumOfNodes() / 2);
    let currentNode = this.head;
    while (count) {
      currentNode = currentNode.next;
      count--;
    }
    return currentNode;
  };
}

const myLinkedList = new LinkedList(10);
myLinkedList.appendNode(20);
myLinkedList.appendNode(-4);
myLinkedList.appendNode(99);
myLinkedList.appendNode(0);
console.log(myLinkedList.returnMiddleLinkedList());
