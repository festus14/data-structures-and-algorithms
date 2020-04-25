const groupAnagrams = (strs) => {
  let strObj = {};
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    let letters = str.split("").sort();

    strObj[letters] ? strObj[letters].push(str) : (strObj[letters] = [str]);
  }
  return Object.values(strObj);
};

console.log(
  groupAnagrams(["ate", "eat", "tea", "tab", "ant", "tan", "bat", "nat"])
);
