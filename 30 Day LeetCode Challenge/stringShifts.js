var stringShift = function (s, shift) {
  let eachShift = 0;
  const strLen = s.length;
  const newStr = [...s];
  shift.forEach((elem) => {
    if (elem[0] === 0) {
      eachShift = eachShift - elem[1];
    } else {
      eachShift = eachShift + elem[1];
    }
  });
  if (eachShift >= strLen)
    eachShift = eachShift - strLen * Math.floor(Math.abs(eachShift / strLen));
  if (eachShift < 0)
    eachShift = eachShift + strLen * Math.ceil(Math.abs(eachShift / strLen));
  for (let i = 0; i < strLen; i++) {
    const letter = s[i];
    let shifted = i + eachShift;
    if (shifted > s.length - 1) shifted = shifted - strLen;
    if (shifted < 0) shifted = shifted + strLen;
    newStr[shifted] = letter;
  }

  return newStr.join("");
};

console.log(
  stringShift("abc", [
    [0, 1],
    [1, 2],
  ])
);

console.log(
  stringShift("abcdefg", [
    [1, 1],
    [1, 1],
    [0, 2],
    [1, 3],
  ])
);
