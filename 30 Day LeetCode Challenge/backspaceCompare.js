const backspaceCompare = (S, T) => {
  let sArray = [];
  let tArray = [];

  S.split("").forEach((elem) => {
    if (elem !== "#") {
      sArray.push(elem);
    } else {
      sArray.pop();
    }
  });

  T.split("").forEach((elem) => {
    if (elem !== "#") {
      tArray.push(elem);
    } else {
      tArray.pop();
    }
  });
  return sArray.join("") === tArray.join("");
};

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a##c", "#a#c"));
console.log(backspaceCompare("a#c", "b"));
