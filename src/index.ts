import getFilePath from "./utils/getFilePath";
import hamiltonCycle from "./hamiltonCycle";
import fulkerson from "./fulkerson";
import eulerianCycle from "./eulerianCycle";

const eulFile = getFilePath("eulerianCycle.txt");
const hamilFile = getFilePath("hamiltonCycle.txt");
const fulkersonFile = getFilePath("fulkerson.txt");

const main = async () => {
  // Максимальный поток
  // await fulkerson(fulkersonFile);
  // Цикл гамильтона
  await hamiltonCycle(hamilFile);


};

main();
