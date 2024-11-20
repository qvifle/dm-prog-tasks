import getMatrix from "./utils/getMatrix";

function dfs(
  tempMatrix: Matrix,
  source: number,
  sink: number,
  visited: boolean[],
  path: number[]
): boolean {
  visited[source] = true;

  if (source === sink) return true;

  for (let v = 0; v < tempMatrix.length; v++) {
    if (!visited[v] && tempMatrix[source][v] > 0) {
      path[v] = source;
      if (dfs(tempMatrix, v, sink, visited, path)) {
        return true;
      }
    }
  }

  return false;
}

function fordFulkerson(matrix: Matrix, source: number, sink: number): number {
  const n = matrix.length;
  const tempMatrix = matrix.map((row) => row.slice());
  const path = new Array(n).fill(-1);
  let maxFlow = 0;

  while (dfs(tempMatrix, source, sink, new Array(n).fill(false), path)) {
    let pathFlow = Infinity;
    for (let v = sink; v !== source; v = path[v]) {
      const u = path[v];
      pathFlow = Math.min(pathFlow, tempMatrix[u][v]);
    }

    for (let v = sink; v !== source; v = path[v]) {
      const u = path[v];
      tempMatrix[u][v] -= pathFlow;
      tempMatrix[v][u] += pathFlow;
    }

    maxFlow += pathFlow;
  }

  return maxFlow;
}

const source = 0; // Источник
const sink = 5; // Сток

const fulkerson = async (filePath: string) => {
  const matrix = await getMatrix(filePath);
  const maxFlow = fordFulkerson(matrix, source, sink);
  console.log(maxFlow);
};

export default fulkerson;
