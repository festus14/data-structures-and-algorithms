/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cacheObject = {};
  this.capacity = capacity;
  this.usedArray = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cacheObject[key]) {
    this.usedArray.push(key);
    if (this.usedArray.length > 2) {
      this.usedArray.shift();
    }
    return this.cacheObject[key];
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cacheObject[key]) {
    this.cacheObject[key] = value;
    this.usedArray.push(key);
    if (this.usedArray.length > this.capacity) {
      this.usedArray.shift();
    }
  } else {
    if (Object.keys(this.cacheObject).length < this.capacity) {
      this.cacheObject[key] = value;
      this.usedArray.push(key);
      if (this.usedArray.length > this.capacity) {
        this.usedArray.shift();
      }
    } else {
      delete this.cacheObject[this.usedArray[0]];
      this.cacheObject[key] = value;
      this.usedArray.push(key);
      if (this.usedArray.length > this.capacity) {
        this.usedArray.shift();
      }
    }
  }
  console.log(this.cacheObject, this.usedArray);
};

var values = [
  [3],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [4],
  [3],
  [2],
  [1],
  [5, 5],
  [1],
  [2],
  [3],
  [4],
  [5],
];
var answers = [
  "LRUCache",
  "put",
  "put",
  "put",
  "put",
  "get",
  "get",
  "get",
  "get",
  "put",
  "get",
  "get",
  "get",
  "get",
  "get",
].map((elem, i) => {
  switch (elem) {
    case "LRUCache":
      this.obj = new LRUCache(...values[i]);
      return null;
    case "get":
      return this.obj.get(...values[i]);
    case "put":
      this.obj.put(...values[i]);
      return null;
    default:
      return null;
  }
});

console.log(answers);

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
