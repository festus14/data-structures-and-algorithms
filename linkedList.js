class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }

        this.tail = this.head;
        this.length = 1
    }

    append = (value) => {
        let nextNode = {
            value: value,
            next: null,
        }

        this.tail.next = nextNode;
        this.tail = nextNode;
        this.length++;
    }

    prepend = (value) => {
        let nextNode = {
            value: value,
            next: null
        }
        nextNode.next = this.head
        this.head = nextNode;
        this.length++;
    }

    insert = (index, value) => {
        let nextNode = {
            value: value,
            next: null,
        }

        if (index > this.length) {
            this.tail.next = nextNode;
            this.tail = nextNode;
            this.length++;
        } else {
            let holdingNode = this.traverse(index - 2);
            nextNode.next = holdingNode.next;
            holdingNode.next = nextNode;
            this.length++;
        }
    }

    remove = (index) => {

        if (index > this.length) {
            console.log("This index does not exist")
            return;
        } else {
            let holdingNode = this.traverse(index - 2);
            holdingNode.next = this.traverse(index);
            this.length--;
        }
    }

    traverse = (index) => {
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    printList = () => {
        let linkValues = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            linkValues.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return linkValues;
    }

    reverse = () => {
        if (!this.head.next) {
            return this.head;
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(13);
myLinkedList.append(2);
myLinkedList.prepend(20);
myLinkedList.append(9);
myLinkedList.prepend(8);
myLinkedList.insert(12, 5);
// myLinkedList.remove(3);
// myLinkedList.remove(3);
myLinkedList.reverse();
console.log(myLinkedList.printList())