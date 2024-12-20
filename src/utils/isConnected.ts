const isConnected = (matrix: Matrix) => {
  if (matrix.length < 2 && !matrix[0][0]) {
    console.log("Одна вершина без петли");
    return false;
  }

  const visited = new Array(matrix.length).fill(false);
  dfs(matrix, visited, 0);

  const isAllVisited = visited.every((el) => el);

  if (!isAllVisited) {
    console.log("Не связный");
  }
  
  return visited.every((el) => el);
};

const dfs = (matrix: Matrix, visited: boolean[], vertex: number) => {
  const countOfVertices = matrix.length;
  visited[vertex] = true;

  for (let i = 0; i < countOfVertices; i++) {
    if (matrix[vertex][i] === 1 && !visited[i]) {
      dfs(matrix, visited, i);
    }
  }
};

export default isConnected;
