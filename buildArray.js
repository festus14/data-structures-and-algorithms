// Build an Array

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    put(item) {
        this.length++;
        this.data[this.length - 1] = item;
        return this.length;
    }

    pull() {
        delete this.data[this.length - 1];
        this.length--;
    }

    shift() {
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.length--;
        delete this.data[this.length];
    }

}

const newArray = new MyArray();

newArray.put('Hello');
newArray.put('Hi');
newArray.put(1000);
newArray.pull();
newArray.shift();

console.log(newArray.get(0))

console.log(newArray);