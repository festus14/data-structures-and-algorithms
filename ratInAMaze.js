const ratInAMaze = (maze) => {
  const checked = new Array(maze.length).fill(0);
  for (let i = 0; i < checked.length; i++) {
    checked[i] = [...new Array(maze[0].length).fill(0)];
  }

  const checkValid = (mazeC, checkedC, i, j) => {
    if (
      i >= 0 &&
      i < mazeC.length &&
      j >= 0 &&
      j < mazeC[0].length &&
      !checkedC[i][j] &&
      mazeC[i][j]
    )
      return true;
    return false;
  };
  let count = 0;

  const ratTryPath = (maze, checked, i = 0, j = 0) => {
    count++;
    if (!checkValid(maze, checked, i, j)) return false;
    checked[i][j] = 1;
    if (ratTryPath(maze, checked, i, j + 1)) {
      return ratTryPath(maze, checked, i, j + 1);
    } else if (ratTryPath(maze, checked, i + 1, j)) {
      return ratTryPath(maze, checked, i + 1, j);
    }
    // console.log("Checked...", checked);
    return checked;
  };
  ratTryPath(maze, checked, 0, 0);
  console.log(count);
  if (checked[maze.length - 1][maze.length - 1]) return checked;
  return false;
};

console.log(
  ratInAMaze([
    [1, 1, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1],
  ])
);
