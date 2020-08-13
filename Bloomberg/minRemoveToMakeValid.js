const minRemoveToMakeValid = (strs) => {
  const stack = [];
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] == "(") stack.push(i);
    else if (strs[i] == ")") {
      if (stack.length) stack.pop();
      else strs[i] = "";
    }
  }
  for (let i of stack) strs[i] = "";
  return strs;
};
console.log(minRemoveToMakeValid(")a(b)c()("));

// console.log(minRemoveToMakeValid("ab(a(c)fg)9)"));
