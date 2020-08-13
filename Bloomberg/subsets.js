// Iterative Approach
const subsets = (nums) => {
  let ans = [[]];
  for (const num of nums) {
    let tempArr = [];
    for (const entries of ans) {
      tempArr.push([...entries, num]);
    }
    ans.push(...tempArr);
  }
  return ans;
};

// console.log(subsets([1, 2, 3, 4, 5]));

const strSubsets = (strs) => {
  let ans = [""];
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    let tempArr = [];
    for (const entry of ans) {
      tempArr.push(entry + str);
    }
    ans.push(...tempArr);
  }
  return ans.slice(1);
};

console.log(strSubsets("abc"));
