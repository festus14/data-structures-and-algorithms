const twoCitySchedCost = (costs) => {
  costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
  return costs.reduce(
    (total, cost, i) => (total + (i < costs.length / 2 ? cost[0] : cost[1])),
    0
  );
};

console.log(
  twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469],
  ])
);