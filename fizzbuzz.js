// function fizzBuzz(num) {
//     for(var i=1; i<=num; i++){
//         if(i % 3 === 0 && i % 5 == 0){
//             console.log("fizzbuzz");
//         }
//         else if(i % 3 === 0){
//             console.log("fizz");
//         }
//         else if(i % 5 === 0){
//             console.log("fuzz")
//         }
//         else{console.log(i)}
//     }
// }

// fizzBuzz(20);

// const arr = ['a', 'b', 'c', 'd', 'e']

// function logTwo(arr){
//     for(let i = 0; i<arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             console.log(arr[i], arr[j])
//         }
//     }
// };

// logTwo(arr);

// function compare(arr1, arr2){
//     for(let i = 0; i < arr1.length; i++){
//         for(let j = 0; j< arr2.length; j++){
//             if(arr1[i] === arr2[j]) return true;
//         }
//     }
//     return false;
// }

// console.log(compare([4,6,8,2], []))

// function compareTwoArray(arr1, arr2){
//     let arrObj = {};
//     for(let i = 0; i < arr1.length; i++){
//         if(!arrObj[arr1[i]]){
//             const elem = arr1[i];
//             arrObj[elem] = true;
//         }
//     }

//     for(let j = 0; j < arr2.length; j++){
//         if(arrObj[arr2[j]]){
//             return true;
//         }
//     }

//     return false;
// }

// console.log(compareTwoArray([1,2,3,66], [0, 8, 10]));

// Build an Array

// class MyArray{
//     constructor(){
//         this.length = 0;
//         this.data = {};
//     }

//     get(index){
//         return this.data[index];
//     }

//     put(item){
//         this.length++;
//         this.data[this.length-1] = item;
//         return this.length;
//     }

//     pull(){
//         delete this.data[this.length-1];
//         this.length--;
//     }

//     shift(){
//         for(let i = 0; i<this.length; i++){
//             this.data[i] = this.data[i+1];
//         }
//         this.length--;
//         delete this.data[this.length];
//     }

// }

// const newArray = new MyArray();

// newArray.put('Hello');
// newArray.put('Hi');
// newArray.put(1000);
// // newArray.pull();
// newArray.shift();

// // console.log(newArray.get(0))

// console.log(newArray);

// Reverse Strings

// function reverseString(str){
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('Hello how are you. Do you hate me?'))

// function mergeSortedArrays(arr1, arr2){

//     if(!Array.isArray(arr1) || !Array.isArray(arr2)){

//         return "The input type is wrong";

//     }else{

//         return arr1.concat(arr2).sort(function(a, b){return a-b});

//     }
// }

// console.log(mergeSortedArrays([1,4,60,5,4], [22, 3, 6,0]));

// function recurring(hashArray){
//     let arrayObject = {};
//     if(!Array.isArray(hashArray) || hashArray.length <= 1){
//         return 'Something is wrong with the input. Try with the proper input';
//     }else{
//         for(let i = 0; i<hashArray.length; i++){
//             if(arrayObject[hashArray[i]]){
//                 return hashArray[i];
//             }else if(!arrayObject[hashArray[i]]){
//                 arrayObject[hashArray[i]] = true;
//             }else{
//                 return undefined;
//             }
//         }
//     }
// }

// console.log(recurring([2,2,3,4,5,3,2,1,80,1,3]))

// var twoSum = function(nums, target) {
//     let ansArray = [];
//     let arrObj = {};
//     for(let i = 0; i<nums.length; i++){
//         for(let j = i+1; j<nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return ansArray = [i, j]
//             }
//         }

//     }
// };

// var twoSum = function(nums, target){
//     let ansArray = [];
//     let arrObj = {};
//     for (let i = 0; i<nums.length; i++){
//         if(!arrObj[nums[i]]){
//             arrObj[nums[i]] = i;
//         }else{
//             arrObj[nums[i]] = i;
//         }
//     }
//     for (let j = 0; j<nums.length; j++){
//         if (arrObj[target - nums[j]]){
//             return ansArray = [j, arrObj[target - nums[j]]];
//         }
//     }
// }

// const twoSum = function(nums, target){
//     let ansArray = [];
//     let arrObj = {};
//     for (let i = 0; i<nums.length; i++){
//         arrObj[nums[i]] = i;
//     }

//     for(let j = 0; j<nums.length; j++){
//         if(arrObj[target - nums[j]] && j !== arrObj[target - nums[j]]){
//             return ansArray = [j, arrObj[target - nums[j]]];
//         }
//     }
// }

// console.log(twoSum([1,3,4,2], 6))

// class LinkedList {
//     constructor(value) {
//         this.head = {
//             value: value,
//             next: null,
//         }

//         this.tail = this.head;
//         this.lenght = 1
//     }

//     append = (value) => {
//         let nextNode = {
//             value: value,
//             next: null,
//         }

// this.tail.next = nextNode;
// this.tail = nextNode;
//         this.lenght++;
//     }

//     prepend = (value) => {
//         let nextNode = {
//             value: value,
//             next: null
//         }
// nextNode.next = this.head
// this.head = nextNode;
//         this.lenght++;
//     }

//     insert = (index, value) => {
//         let nextNode = {
//             value: value,
//             next: null,
//         }

//         if (index > this.lenght) {
//             this.tail.next = nextNode;
//              this.tail = nextNode;
//             this.lenght++;
//         } else {
//             let holdingNode = this.traverse(index - 2);
//             nextNode.next = holdingNode.next;
//             holdingNode.next = nextNode;
//             this.lenght++;
//         }
//     }

//     remove = (index) => {

//         if (index > this.lenght) {
//             console.log("This index does not exist")
//             return;
//         } else {
//             let holdingNode = this.traverse(index - 2);
//             holdingNode.next = this.traverse(index);
//             this.lenght--;
//         }
//     }

//     traverse = (index) => {
//         let currentNode = this.head;
//         for (let i = 0; i < index; i++) {
//             currentNode = currentNode.next;
//         }
//         return currentNode;
//     }

//     printList = () => {
//         let linkValues = [];
//         let currentNode = this.head;
//         while (currentNode !== null) {
//             linkValues.push(currentNode.value);
//             currentNode = currentNode.next;
//         }
//         return linkValues;
//     }

//     reverse = () => {
//         if (!this.head.next) {
//             return this.head;
//         }

//         let first = this.head;
//         this.tail = this.head;
//         let second = first.next;
//         while (second) {
//             let temp = second.next;
//             second.next = first;
//             first = second;
//             second = temp;
//         }
//         this.head.next = null;
//         this.head = first;
//     }
// }

// const myLinkedList = new LinkedList(10);

// myLinkedList.append(13);
// myLinkedList.append(2);
// myLinkedList.prepend(20);
// myLinkedList.append(9);
// myLinkedList.prepend(8);
// myLinkedList.insert(12, 5);
// // myLinkedList.remove(3);
// // myLinkedList.remove(3);
// myLinkedList.reverse();
// console.log(myLinkedList.printList())

// class DoublyLinkedList{
//     constructor(value){
//         this.head = {
//             value: value,
//             next: null,
//             prev: null
//         }

//         this.tail = this.head;

//         this.lenght = 1
//     }

//     append = (value) => {
//         let nextNode = {
//             value: value,
//             next: null,
//             prev: null
//         }

//         nextNode.prev = this.tail;
//         this.tail.next = nextNode;
//         this.tail = nextNode;
//         this.lenght++;
//     }

//     prepend = (value) => {
//         let nextNode = {
//             value: value,
//             next: null,
//             prev: null
//         }
//         nextNode.next = this.head;
//         this.head.prev = nextNode;
//         this.head = nextNode;
//         this.lenght++;
//     }

//     insert = (index, value) => {
//         let nextNode = {
//             value: value,
//             next: null,
//             prev: null
//         }

//         if(index > this.lenght){
//             this.tail.next = nextNode;
//             nextNode.prev = this.tail;
//             this.tail = nextNode;
//             this.lenght++;
//         }else{
//             let holdingNode = this.traverse(index-2);
//             let futureNode = holdingNode.next;
//             nextNode.next = futureNode;
//             nextNode.prev = holdingNode;
//             futureNode.prev = nextNode;

//             holdingNode.next = nextNode;
//             this.lenght++;
//         }
//     }

//     remove = (index) => {

//         if(index > this.lenght){
//             console.log("This index does not exist")
//             return;
//         }
//         else{
//             let holdingNode = this.traverse(index-2);
//             let nextNode = this.traverse(index);
//             holdingNode.next = nextNode;
//             nextNode.prev = holdingNode;
//             this.lenght--;
//         }
//     }

//     traverse = (index) => {
//         let currentNode = this.head;
//         for(let i = 0; i<index; i++){
//             currentNode = currentNode.next;
//         }
//         return currentNode;
//     }

//     printList = () => {
//         let linkValues = [];
//         let currentNode = this.head;
//         while(currentNode !== null){
//             linkValues.push(currentNode.value);
//             currentNode = currentNode.next;
//         }
//         return linkValues;
//     }
// }

// const myDoublyLinkedList = new DoublyLinkedList(10);

// myDoublyLinkedList.append(13);
// myDoublyLinkedList.append(2);
// myDoublyLinkedList.prepend(20);
// myDoublyLinkedList.append(9);
// myDoublyLinkedList.prepend(8);
// myDoublyLinkedList.insert(2, 5);
// myDoublyLinkedList.remove(2);
// myDoublyLinkedList.remove(3);
// console.log(myDoublyLinkedList)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// var addTwoNumbers = function(l1, l2) {
//     let tail = new ListNode();
//     let newNode = tail
//     let carry = 0;

//     while(l1 || l2){
//         newNode.next = new ListNode();
//         newNode = newNode.next;
//         let temp;
//         if(!l1){
//            temp = l2.val + carry;
//             l2 = l2.next
//         }

//         else if(!l2){
//            temp = l1.val + carry;
//             l1 = l1.next;
//         }

//         else{
//             temp = l1.val + l2.val + carry;

//             l1 = l1.next;
//             l2 = l2.next;
//         }

//         if(temp < 10){
//             newNode.val = temp;
//             carry = 0;
//         }else{
//             newNode.val = temp - 10;
//             carry = 1;
//         }

//     }

//     if(!l1 && !l2 && carry === 1){
//         newNode.next = new ListNode(carry);
//     }

//     return tail.next;
// };

// Return nth term of a Finobacchi Series

// function nthFibonacci(n){
//     let currentVal = 0;
//     let prevVal = 0;
//     let nextvalue;
//     if(n === 1) return 1;

//     for(let i = 0; i < n; i++){
//         if(i === 0) {
//             nextValue = 1;
//             currentVal = 1;
//         }else{
//             nextValue = currentVal + prevVal;
//             prevVal = currentVal;
//             currentVal = nextValue;
//         }
//     }

//     return nextValue;
// }

// console.log(nthFibonacci(7))

// Square root of a number without using method

// function squareRootOfNum(n){
//     for(let i = 0; i<n + 1; i++){
//         if(n/i === i) return i;
//     }
// }

// console.log(squareRootOfNum(1));

// function pickingNumbers(a) {
//     // Write your code here
//     let ans = 0;
//     let count = 0;

//     for(let i = 0; i<a.length; i++){
//         for(let j = 0; j<a.length; j++){
//             if(a[i] - a[j] == 1 || a[i] - a[j] == 0){
//                 count++;
//             }
//         }
//         ans = Math.max(ans, count);
//         count = 0;
//     }
//     return ans;

// }

// console.log(pickingNumbers([1, 2, 2, 3, 1, 2]))

// let arr = [...new Set([2,2,3,2,4,5,77,8,43,2,0,0,65,77])];
// console.log(arr)

// function climbingLeaderboard(scores, alice) {
// let ansArr = [];
// let uniqArr = [...new Set(scores)];
// uniqArr.push(0);
// for(let i = 0; i<alice.length; i++){
//     for(let j = 0; j<uniqArr.length; j++){
//         if(alice[i] >= uniqArr[j]){
//             ansArr.push(j + 1);
//             break;
//         }
//     }
// }

// return ansArr;
// }

// Complete the permutationEquation function below.
// function permutationEquation(p) {
//     let arrObj = {};
//     let ansArr = [];
//     for(let i = 0; i<p.length; i++){
//         arrObj[p[i]] = i + 1;
//     }

//     let valArr = Object.values(arrObj)
//     for(let j = 0; j<p.length; j++){
//         ansArr.push(p.indexOf(valArr[j]) + 1);
//     }

//     return ansArr
// }

// function possibleSubstrings(str) {
//     let substr = ''
//     let ansArr = []
//     let n = 1;
//     for (let i = 0; i < str.length; i++) {
//         substr = substr + str[i]
//         for (let j = n; j < str.length + 1; j++) {
//             ansArr.push(substr);
//             substr = substr + str[j]
//         }
//         substr = '';
//         n++;
//     }
//     return ansArr;
// }

// console.log(possibleSubstrings('colour'));

// function climbingLeaderboard(scores, alice) {
//     let ansArr = [];
//     let uniqObj = {};
//     scores.push(0);
//     scores = [...new Set(scores)]
//     for (let i = 0; i < scores.length; i++) {
//         if (!uniqObj[scores[i]]) { uniqObj[scores[i]] = i; }
//     }

//     for (let j = 0; j < alice.length; j++) {
//         for (let x = 0; x < scores.length; x++) {
//             if (alice[j] >= scores[x]) {
//                 ansArr.push(uniqObj[scores[x]] + 1);
//                 break;
//             }
//         }
//     }
//     return ansArr;
// }

// function climbingLeaderboard(scores, alice) {
//     let ansArr = [];
//     scores = [...new Set(scores)];
//     let fakeScores = scores;
//     for (let i = 0; i < alice.length; i++) {
//         fakeScores.push(alice[i]);
//         fakeScores.sort((a, b) => b - a);
//         ansArr.push(fakeScores.indexOf(alice[i]) + 1);
//         fakeScores = scores;
//     }

//     return ansArr;
// }

// console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]))

// function rankIndex(values, rank) {
//     let totalScoreArr = [];
//     let sortedScoreArr = [];
//     let scoresSum = 0;
//     let outObj = {};
//     for (let i = 0; i < values.length; i++) {
//         for (let j = 0; j < values[i].length; j++) {
//             scoresSum = scoresSum + values[i][j];
//         }
//         totalScoreArr.push(scoresSum);
//         scoresSum = 0;
//     }

//     sortedScoreArr = [...totalScoreArr];
//     sortedScoreArr.sort((a, b) => b - a);
//     let needed = sortedScoreArr[rank - 1];

//     for (let i = 0; i < values.length; i++) {
//         if (totalScoreArr[i] === needed) {
//             outObj[sortedScoreArr.indexOf(needed) + 1] = totalScoreArr.indexOf(needed);
//             totalScoreArr[i] = null;
//             sortedScoreArr[sortedScoreArr.indexOf(needed)] = null;
//         }

//     }

//     return (outObj[rank]);
// }

// console.log(rankIndex(
// [
//     [80, 96, 81, 77],
//     [80, 96, 81, 77],
//     [78, 71, 93, 75],
//     [71, 98, 70, 95],
//     [80, 96, 89, 77],
// ],
//     3))

// function timeConversion(s) {
//     /*
//      * Write your code here.
//      */
//     let determinant = s.slice(8);
//     let variable = s.slice(0, 2);
//     let body = s.slice(2, 8);
//     variable = parseInt(variable);

//     if (determinant === 'PM') {
//         if (variable < 12) {
//             variable = variable + 12;
//         }

//     } else {
//         if (variable === 12) {
//             variable = 0;
//         }
//     }

//     if (variable - 10 < 0) {
//         return '0' + variable + body
//     }
//     return variable + body
// }

// console.log(timeConversion('12:40:22AM'))

// function strangeSort(mapping, nums) {
//     let colArr = [];
//     let tempStr = '';
//     let ansArr = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums[i].length; j++) {
//             tempStr = tempStr + mapping.indexOf(parseInt(nums[i][j]));
//         }
//         colArr.push(tempStr);
//         tempStr = '';
//     }

//     colArr.sort((a, b) => a - b);

//     for (let i = 0; i < colArr.length; i++) {
//         for (let j = 0; j < colArr[i].length; j++) {
//             tempStr = tempStr + mapping[parseInt(colArr[i][j])];
//         }
//         ansArr.push(tempStr);
//         tempStr = '';
//     }

//     return ansArr;
// }

// console.log(strangeSort([2, 1, 4, 8, 6, 3, 0, 9, 7, 5], ['12', '02', '4', '023', '65', '83', '224', '50']));
// console.log(strangeSort([3, 5, 4, 6, 2, 7, 9, 8, 0, 1], ['990', '332', '32']));

// arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
//     console.log(arr[i], arr[j]);
//     // console.log(i, j);
// }

// let arr1 = [
//     [80, 96, 81, 77],
//     [80, 96, 81, 77],
//     [78, 71, 93, 75],
//     [71, 98, 70, 95],
//     [80, 96, 89, 77]
// ];

// let arr2 = [];

// for (let i = 0; i < arr1.length; i++) {
//     arr2.push([...arr1[i]]);
// }

// arr2[0][0] = 1000000;

// console.log(arr2);
// console.log(arr1);

// function stringFormattedWeekelyPrices(dailyPrice) {
//     let ans = [];
//     let sum = 0;
//     for (let j = 0; j < dailyPrice.length; j++) {
//         if (dailyPrice.length >= 7) {
//             for (let i = 0; i < dailyPrice.length; i++) {
//                 if (i <= 6) {
//                     sum += dailyPrice[i];
//                 }

//                 if (i === 6) {
//                     ans.push((sum / 7).toFixed("2"));
//                     sum = 0;
//                 }
//             }
//         }
//         dailyPrice.shift();
//     }

//     return ans;
// }
// console.log(stringFormattedWeekelyPrices([7, 8, 8, 11, 9, 7, 5, 6]));

// arr1 = [
//     [1, 0, 0, 1],
//     [0, 0, 0, 0]
// ];

// array2 = [
//     [0, 0, 0, 0],
//     [0, 0, 0, 0]
// ];
// for (let i in arr1) {
//     for (let j in arr1[i]) {
//         console.log(arr1[i][j]);
//         count = 0;
//         for (let a = -1; a < 2; a++) {
//             for (let b = -1; b < 2; b++) {
//                 if (arr1[i + a][j + b]) {
//                     arr1[i + a][j + b] = 0;
//                 }
//                 count += arr[i + a][j + b];
//             }
//         }

//         array2[i][j] = count;
//     }
// }
// console.log(array2);

// function gridGame(grid, k, rules) {
//     let tempArr = [];
//     let newArr = [];

//     for (let i = 0; i < grid.length; i++) {
//         newArr.push([...grid[i]])
//     }
//     let sumArr = [];
//     let count = 0;

//     let ruleCount = {};
//     for (let i = 0; i < rules.length; i++) {
//         if (rules[i] === "alive") {
//             ruleCount[i] = true;
//         }
//     }

//     for (let w = 0; w < k; w++) {
//         for (let i = 0; i < newArr.length; i++) {
//             for (let j = 0; j < newArr[i].length; j++) {
//                 if (newArr[i - 1]) {
//                     if (newArr[i - 1][j] === 1) {
//                         count++;
//                     }
//                     if (newArr[i - 1][j - 1] === 1) {
//                         count++;
//                     }
//                     if (newArr[i - 1][j + 1]) {
//                         count++;
//                     }
//                 }

//                 if (newArr[i + 1]) {
//                     if (newArr[i + 1][j] === 1) {
//                         count++;
//                     }
//                     if (newArr[i + 1][j - 1]) {
//                         count++;
//                     }
//                     if (newArr[i + 1][j + 1]) {
//                         count++;
//                     }
//                 }

//                 if (newArr[i][j - 1] === 1) {
//                     count++;
//                 }
//                 if (newArr[i][j + 1] === 1) {
//                     count++;
//                 }

//                 sumArr.push(count);
//                 count = 0;
//             }

//             tempArr.push(sumArr);
//             sumArr = [];
//         }

//         for (let i = 0; i < tempArr.length; i++) {
//             for (let j = 0; j < tempArr[i].length; j++) {
//                 newArr[i][j] = tempArr[i][j];
//             }
//         }

//         tempArr = [];

//         for (let i = 0; i < newArr.length; i++) {
//             for (let j = 0; j < newArr[i].length; j++) {
//                 if (ruleCount[newArr[i][j]]) {
//                     newArr[i][j] = 1;
//                 } else {
//                     newArr[i][j] = 0;
//                 }
//             }
//         }
//     }
//     // console.log(newArr)

//     return newArr;
// }

// console.log(
//     gridGame([
//         [0, 1, 0, 0],
//         [0, 0, 0, 0]
//     ], 1, [
//         "dead",
//         "alive",
//         "dead",
//         "dead",
//         "dead",
//         "dead",
//         "dead",
//         "dead",
//         "dead",
//         "dead"
//     ])
// );

// function play(arr) {
//     let tomSore = 0;
//     let jerryScore = 0;
//     let invertedArr = [];
//     let colArr = [];
//     let maxNum;

//     for (let i = 0; i < arr[0].length; i++) {
//         invertedArr.push([]);
//     }

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             invertedArr[j].push(arr[i][j]);
//         }
//     }

//     for (let i = 0; i < invertedArr.length; i++) {
//         maxNum = Math.max(...invertedArr[i]);
//     }

//     console.log(maxNum);
//     console.log(invertedArr);

//     // return tomSore - jerryScore;
// }

// console.log(play([
//     [5, 7, 6, 2, 8, 4, 4, 8],
//     [2, 5, 4, 5, 9, 8, 4, 2]
// ]));

// function rotateTheString(originalString, direction, amount) {
//     arrString = originalString.split("");
//     newArr = [...arrString];
//     let newPos;

//     for (let i = 0, j = 0; i < direction.length; i++, j++) {
//         if (direction[i] === 0) {
//             for (let k = 0; k < arrString.length; k++) {
//                 newPos = k - amount[j];
//                 if (newPos < 0) {
//                     newPos += arrString.length;
//                 }
//                 newArr[newPos] = arrString[k];
//             }
//         } else {
//             for (let k = 0; k < arrString.length; k++) {
//                 newPos = k + amount[j];
//                 if (newPos > arrString.length) {
//                     newPos -= arrString.length;
//                 }
//                 newArr[newPos] = arrString[k];
//             }
//         }
//     }

//     return newArr.join("");
// }

// console.log(rotateTheString("hurart", [0, 1], [4, 1]));

// function minPrice(arr) {
//     let valObj = {};
//     let minValArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         minValArr.push(Math.min(...arr[i]));
//         valObj[arr[i].indexOf(minValArr[i])] = true;
//         if (valObj[arr[i].indexOf(minValArr[i])]) {
//             arr[i + 1][arr[i].indexOf(minValArr[i])] = null;
//         }
//     }

//     return minValArr;
// }

// console.log(
//     minPrice([
//         [1, 2, 3],
//         [1, 2, 3],
//         [3, 3, 1]
//     ])
// );

function findHighPoints(elevations) {
    let boolArr = [];
    let testObj = {};
    let tempArr = [];

    for (let i = 0; i < elevations.length; i++) {
        for (let j = 0; j < elevations[i].length; j++) {
            if (elevations[i - 1]) {
                if (elevations[i - 1][j - 1]) {
                    if (elevations[i - 1][j - 1] < elevations[i][j]) {
                        if (!testObj[true]) {
                            testObj[true] = elevations[i][j];
                        }
                    } else {
                        if (!testObj[false]) {
                            testObj[false] = elevations[i][j];
                        }
                    }
                }
                if (elevations[i - 1][j + 1]) {
                    if (elevations[i - 1][j + 1] < elevations[i][j]) {
                        if (!testObj[true]) {
                            testObj[true] = elevations[i][j];
                        }
                    } else {
                        if (!testObj[false]) {
                            testObj[false] = elevations[i][j];
                        }
                    }
                }
                if (elevations[i - 1][j]) {
                    if (elevations[i - 1][j] < elevations[i][j]) {
                        if (!testObj[true]) {
                            testObj[true] = elevations[i][j];
                        }
                    } else {
                        if (!testObj[false]) {
                            testObj[false] = elevations[i][j];
                        }
                    }
                }
            }
            if (elevations[i + 1]) {
                if (elevations[i + 1][j - 1]) {
                    if (elevations[i + 1][j - 1] < elevations[i][j]) {
                        if (!testObj[true]) {
                            testObj[true] = elevations[i][j];
                        }
                    } else {
                        if (!testObj[false]) {
                            testObj[false] = elevations[i][j];
                        }
                    }
                }
                if (elevations[i + 1][j + 1]) {
                    if (elevations[i + 1][j + 1] < elevations[i][j]) {
                        if (!testObj[true]) {
                            testObj[true] = elevations[i][j];
                        }
                    } else {
                        if (!testObj[false]) {
                            testObj[false] = elevations[i][j];
                        }
                    }
                }
                if (elevations[i + 1][j]) {
                    if (elevations[i + 1][j] < elevations[i][j]) {
                        if (!testObj[true]) {
                            testObj[true] = elevations[i][j];
                        }
                    } else {
                        if (!testObj[false]) {
                            testObj[false] = elevations[i][j];
                        }
                    }
                }
            }

            if (elevations[i][j - 1]) {
                if (elevations[i][j - 1] < elevations[i][j]) {
                    if (!testObj[true]) {
                        testObj[true] = elevations[i][j];
                    }
                } else {
                    if (!testObj[false]) {
                        testObj[false] = elevations[i][j];
                    }
                }
            }

            if (elevations[i][j + 1]) {
                if (elevations[i][j + 1] < elevations[i][j]) {
                    if (!testObj[true]) {
                        testObj[true] = elevations[i][j];
                    }
                } else {
                    if (!testObj[false]) {
                        testObj[false] = elevations[i][j];
                    }
                }
            }

            if (testObj[false]) {
                tempArr.push(0);
            } else {
                tempArr.push(1);
            }
            testObj = {};
        }

        boolArr.push(tempArr);
        tempArr = [];
    }

    return boolArr;
}

console.log(
    findHighPoints([
        [1, 2, 1, 3, 4],
        [1, 5, 2, 2, 2],
        [4, 5, 1, 9, 7],
        [3, 5, 3, 7, 6],
        [4, 3, 1, 7, 3]
    ])
);

// console.log(
//     findHighPoints([
//         [1, 1, 1, 1, 1],
//         [1, 2, 2, 2, 1],
//         [1, 2, 3, 1, 2],
//         [1, 2, 2, 2, 1],
//         [1, 1, 1, 1, 1],
//         [1, 1, 1, 1, 3]
//     ])
// );