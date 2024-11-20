"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getCountOfOddVertices_1 = __importDefault(require("./utils/getCountOfOddVertices"));
const getMatrix_1 = __importDefault(require("./utils/getMatrix"));
const isConnected_1 = __importDefault(require("./utils/isConnected"));
const isEulerian = (matrix) => {
    if ((0, isConnected_1.default)(matrix) &&
        ((0, getCountOfOddVertices_1.default)(matrix) == 0 || matrix.length < 3)) {
        return true;
    }
    return false;
};
function getEulerianCycle(matrix) {
    const cycle = [];
    const stack = [];
    const countOfVertices = matrix.length;
    // Копируем матрицу смежности, чтобы изменять её по мере обхода
    const tempMatrix = matrix.map((row) => [...row]);
    // Стартуем с первой вершины
    let currentVertex = 0;
    stack.push(currentVertex);
    while (stack.length > 0) {
        const vertex = stack[stack.length - 1];
        let found = false;
        for (let i = 0; i < countOfVertices; i++) {
            if (tempMatrix[vertex][i] === 1) {
                // Убираем рёбро (i, vertex) из графа
                tempMatrix[vertex][i] = 0;
                tempMatrix[i][vertex] = 0;
                stack.push(i); // Переходим к соседней вершине
                found = true;
                break;
            }
        }
        if (!found) {
            // Если не нашли рёбер, то добавляем вершину в цикл и убираем её из стека
            cycle.push(vertex);
            stack.pop();
        }
    }
    return cycle.reverse();
}
const eulerianCycle = async (filePath) => {
    const matrix = await (0, getMatrix_1.default)(filePath);
    if (isEulerian(matrix)) {
        console.log("Это эйлеров граф");
        console.log(getEulerianCycle(matrix));
    }
    else {
        console.log("Граф не является эйлеровым");
    }
};
exports.default = eulerianCycle;
