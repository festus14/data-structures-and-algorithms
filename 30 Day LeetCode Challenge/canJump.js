// const canJump = (nums) => {
//   let max = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     for (let j = 0; j < nums.length; j++) {
//       const elem = nums[j];
//     }
//   }
// };

const date = new Date("2020-04-28T20:55:03.178560+00:00");
console.log(date);
let day = "" + date.getDate();
let month = "" + (date.getMonth() + 1);
const year = "" + date.getFullYear();
let hr = "" + date.getHours();
let min = "" + date.getMinutes();
let sec = "" + date.getSeconds();

month = month.length < 2 ? "0" + month : month;
day = day.length < 2 ? "0" + day : day;
hr = hr.length < 2 ? "0" + hr : hr;
min = min.length < 2 ? "0" + min : min;
sec = sec.length < 2 ? "0" + sec : sec;

console.log([day, month, year, hr, min, sec].join(":"));
