const multiply = (numOne, numTwo) => {
  const sign = numOne[0] * numTwo[0] < 0 ? -1 : 1;
  numOne[0] = Math.abs(numOne[0]);
  numTwo[0] = Math.abs(numTwo[0]);

  let result = new Array(numOne.length + numTwo.length).fill(0);
  console.log(result);
  for (let i = numOne.length - 1; i >= 0; i--) {
    const num1 = numOne[i];
    for (let j = numTwo.length - 1; j >= 0; j--) {
      const num2 = numTwo[j];
      result[i + j + 1] += num1 * num2;
      result[i + j] += result[i + j + 1] / 10;
      result[i + j + 1] % 10;
    }
  }
};

multiply([-1], [-12]);
