"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("node:fs/promises"));
const getMatrix = async (filePath) => {
    const file = await promises_1.default.open(filePath, "r+");
    const matrix = [];
    for await (const line of file.readLines()) {
        const row = line.split(" ").map((el) => parseInt(el));
        matrix.push(row);
    }
    return matrix;
};
exports.default = getMatrix;
