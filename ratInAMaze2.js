const ratInAMaze = (maze) => {
  const checkValid = (maze, i, j) => {
    if (
      i < 0 ||
      i >= maze.length ||
      j < 0 ||
      j >= maze[i].length ||
      maze[i][j] !== 1
    )
      return false;
    return true;
  };

  const dfs = (maze, i, j) => {
    if (i === maze.length - 1 && j === maze[i].length - 1 && maze[i][j] === 1)
      return true;

    if (!checkValid(maze, i, j)) return false;

    return dfs(maze, i + 1, j) || dfs(maze, i, j + 1);
  };

  if (maze[0][0] === 1 && dfs(maze, 0, 0)) return true;
  return false;
};

console.log(
  ratInAMaze([
    [1, 1, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 0, 1],
  ])
);
