const getCountOfOddVerticies = (matrix: Matrix) => {
  let countOfOddVerticies = 0;
  for (const row of matrix) {
    const degree = row.reduce((el, acc) => el + acc);
    if (degree % 2 == 1) {
      countOfOddVerticies++;
    }
  }
  return countOfOddVerticies;
};

export default getCountOfOddVerticies;
