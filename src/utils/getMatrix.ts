import fs from "node:fs/promises";

const getMatrix = async (filePath: string) => {
  const file = await fs.open(filePath, "r+");
  const matrix: Matrix = [];

  for await (const line of file.readLines()) {
    const row = line.split(" ").map((el) => parseInt(el));
    matrix.push(row);
  }

  return matrix;
};

export default getMatrix;
