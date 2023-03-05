function getMatrixCombinations(matrix) {
  if (matrix.length === 0) {
    return [[]];
  }

  const [firstRow, ...remainingRows] = matrix;
  const remainingCombinations = getMatrixCombinations(remainingRows);
  const combinations = [];

  for (let i = 0; i < firstRow.length; i++) {
    for (let j = 0; j < remainingCombinations.length; j++) {
      combinations.push([firstRow[i], ...remainingCombinations[j]]);
    }
  }

  return combinations;
}

module.exports = {
  getMatrixCombinations,
};
