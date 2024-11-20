"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getMatrix_1 = __importDefault(require("./utils/getMatrix"));
function dfs(tempMatrix, source, sink, visited, path) {
    visited[source] = true;
    if (source === sink)
        return true;
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
function fordFulkerson(matrix, source, sink) {
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
const fulkerson = async (filePath) => {
    const matrix = await (0, getMatrix_1.default)(filePath);
    const maxFlow = fordFulkerson(matrix, source, sink);
    console.log(maxFlow);
};
exports.default = fulkerson;
