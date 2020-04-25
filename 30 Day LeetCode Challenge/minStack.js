const minStack = (operation, values) => {
  const ansArray = [];
  const stack = [];

  const myPush = (val) => {
    stack.push(val);
    ansArray.push(null);
  };

  const myPop = () => {
    stack.shift();
    ansArray.push(null);
  };

  const top = () => {
    ansArray.push(stack[0]);
  };

  const getMin = () => {
    console.log(stack);
    ansArray.push(Math.min(...stack));
  };

  const MinStack = () => {
    ansArray.push(null);
  };

  operation.forEach((elem, i) => {
    switch (elem) {
      case "MinStack":
        MinStack();
        break;
      case "push":
        myPush(...values[i]);
        break;
      case "pop":
        myPop();
        break;
      case "top":
        top();
        break;
      case "getMin":
        getMin();
        break;
      default:
        break;
    }
  });

  return ansArray;
};

console.log(
  minStack(
    ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"],
    [[], [-2], [0], [-3], [], [], [], []]
  )
);
