import { join } from "path";

const getFilePath = (fileName: string) => {
  return join(__dirname, "../../", "input", fileName);
};

export default getFilePath;
