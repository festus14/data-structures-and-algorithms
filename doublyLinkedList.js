class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }

        this.tail = this.head;

        this.lenght = 1
    }

    append = (value) => {
        let nextNode = {
            value: value,
            next: null,
            prev: null
        }

        nextNode.prev = this.tail;
        this.tail.next = nextNode;
        this.tail = nextNode;
        this.lenght++;
    }

    prepend = (value) => {
        let nextNode = {
            value: value,
            next: null,
            prev: null
        }
        nextNode.next = this.head;
        this.head.prev = nextNode;
        this.head = nextNode;
        this.lenght++;
    }

    insert = (index, value) => {
        let nextNode = {
            value: value,
            next: null,
            prev: null
        }

        if (index > this.lenght) {
            this.tail.next = nextNode;
            nextNode.prev = this.tail;
            this.tail = nextNode;
            this.lenght++;
        } else {
            let holdingNode = this.traverse(index - 2);
            let futureNode = holdingNode.next;
            nextNode.next = futureNode;
            nextNode.prev = holdingNode;
            futureNode.prev = nextNode;

            holdingNode.next = nextNode;
            this.lenght++;
        }
    }

    remove = (index) => {

        if (index > this.lenght) {
            console.log("This index does not exist")
            return;
        } else {
            let holdingNode = this.traverse(index - 2);
            let nextNode = this.traverse(index);
            holdingNode.next = nextNode;
            nextNode.prev = holdingNode;
            this.lenght--;
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
}

const myDoublyLinkedList = new DoublyLinkedList(10);

myDoublyLinkedList.append(13);
myDoublyLinkedList.append(2);
myDoublyLinkedList.prepend(20);
myDoublyLinkedList.append(9);
myDoublyLinkedList.prepend(8);
myDoublyLinkedList.insert(2, 5);
myDoublyLinkedList.remove(2);
myDoublyLinkedList.remove(3);
console.log(myDoublyLinkedList)