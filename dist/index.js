"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getFilePath_1 = __importDefault(require("./utils/getFilePath"));
const hamiltonCycle_1 = __importDefault(require("./hamiltonCycle"));
const eulFile = (0, getFilePath_1.default)("eulerianCycle.txt");
const hamilFile = (0, getFilePath_1.default)("hamiltonCycle.txt");
const fulkersonFile = (0, getFilePath_1.default)("fulkerson.txt");
const main = async () => {
    // Максимальный поток
    // await fulkerson(fulkersonFile);
    // Цикл гамильтона
    await (0, hamiltonCycle_1.default)(hamilFile);
};
main();
