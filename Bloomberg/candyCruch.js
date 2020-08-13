const candyCrush = (strs) => {
  while (strs.length > 0) {
    let len = strs.length;
    for (let i = 0; i < strs.length; i++) {
      if (strs[i] === strs[i + 1] && strs[i] === strs[i + 2]) {
        strs = strs.slice(0, i) + strs.slice(i + 3);
        break;
      }
    }
    if (len === strs.length) return strs;
  }
  return "";
};

console.log(candyCrush("aabbbacc"));
