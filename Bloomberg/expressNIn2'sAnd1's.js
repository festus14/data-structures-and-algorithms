const expressNIn2sAnd1s = () => {
  const cache = {};
  return function dfs(n) {
    if (n === 0) return 1;
    if (n < 0) return 0;
    if (cache[n]) return cache[n];
    let ans = dfs(n - 1) + dfs(n - 2);
    return (cache[n] = ans);
  };
};

const test = expressNIn2sAnd1s();

console.log(test(4));
