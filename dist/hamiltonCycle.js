"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getMatrix_1 = __importDefault(require("./utils/getMatrix"));
function canBePushed(matrix, path, pos, v) {
    // Проверяем, не была ли вершина уже посещена
    if (path.includes(v))
        return false;
    // Проверяем, существует ли ребро между текущей вершиной и новой вершиной
    if (matrix[path[pos - 1]][v] === 0)
        return false;
    return true;
}
const getHamiltonCycle = (matrix, path, position) => {
    if (position === matrix.length) {
        if (matrix[path[position - 1]][path[0]] === 1) {
            return true;
        }
        return false;
    }
    // Пробуем добавить все вершины в путь
    for (let v = 1; v < matrix.length; v++) {
        if (canBePushed(matrix, path, position, v)) {
            path[position] = v;
            // Рекурсивно продолжаем строить путь
            if (getHamiltonCycle(matrix, path, position + 1)) {
                return true;
            }
            // Если не удалось найти путь, откатываем шаг
            path[position] = -1;
        }
    }
    return false;
};
const hamiltonCycle = async (filePath) => {
    const matrix = await (0, getMatrix_1.default)(filePath);
    const path = new Array(matrix.length).fill(-1);
    // Начинаем путь с вершины 0
    path[0] = 0;
    // Если гамильтонов цикл существует, возвращаем путь
    if (getHamiltonCycle(matrix, path, 1)) {
        path.push(path[0]);
        console.log(path);
        return path;
    }
    console.log("No path");
    return null;
};
exports.default = hamiltonCycle;
