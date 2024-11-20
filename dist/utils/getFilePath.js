"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const getFilePath = (fileName) => {
    return (0, path_1.join)(__dirname, "../../", "input", fileName);
};
exports.default = getFilePath;
