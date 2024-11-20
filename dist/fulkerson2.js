"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getMatrix_1 = __importDefault(require("./utils/getMatrix"));
// Функция поиска увеличивающего пути с использованием DFS
function dfs(residualGraph, source, sink, visited, path) {
    visited[source] = true;
    if (source === sink)
        return true;
    for (let v = 0; v < residualGraph.length; v++) {
        if (!visited[v] && residualGraph[source][v] > 0) {
            path[v] = source; // Сохраняем путь
            if (dfs(residualGraph, v, sink, visited, path)) {
                return true;
            }
        }
    }
    return false;
}
// Алгоритм Форда-Фалкерсона
function fordFulkerson(capacity, source, sink) {
    const n = capacity.length;
    const residualGraph = capacity.map((row) => row.slice()); // Копия графа
    const path = new Array(n).fill(-1); // Массив для хранения пути
    let maxFlow = 0;
    // Пока существует путь с ненулевой остаточной пропускной способностью
    while (dfs(residualGraph, source, sink, new Array(n).fill(false), path)) {
        // Находим минимальную пропускную способность вдоль пути
        let pathFlow = Infinity;
        for (let v = sink; v !== source; v = path[v]) {
            const u = path[v];
            pathFlow = Math.min(pathFlow, residualGraph[u][v]);
        }
        // Обновляем остаточные емкости ребер и добавляем обратные ребра
        for (let v = sink; v !== source; v = path[v]) {
            const u = path[v];
            residualGraph[u][v] -= pathFlow;
            residualGraph[v][u] += pathFlow;
        }
        // Увеличиваем общий поток
        maxFlow += pathFlow;
    }
    return maxFlow;
}
// Пример использования
const capacityMatrix = [
    [0, 16, 13, 0, 0, 0],
    [0, 0, 10, 12, 0, 0],
    [0, 4, 0, 0, 14, 0],
    [0, 0, 9, 0, 0, 20],
    [0, 0, 0, 7, 0, 4],
    [0, 0, 0, 0, 0, 0],
];
const source = 0; // Источник
const sink = 5; // Сток
// console.log("Максимальный поток:", fordFulkerson(capacityMatrix, source, sink));
const fulkerson = async (filePath) => {
    const matrix = await (0, getMatrix_1.default)(filePath);
    const maxFlow = fordFulkerson(matrix, source, sink);
    console.log(maxFlow);
};
exports.default = fulkerson;
