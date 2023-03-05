const fs = require("fs");
const { pathToFileURL } = require("url");

const combineAllMatrixElements = (matrix) => {
  if (matrix.length === 0) {
    return [[]];
  }

  const [firstRow, ...remainingRows] = matrix;
  const remainingCombinations = combineAllMatrixElements(remainingRows);
  const combinations = [];

  for (let i = 0; i < firstRow.length; i++) {
    for (let j = 0; j < remainingCombinations.length; j++) {
      combinations.push([firstRow[i], ...remainingCombinations[j]]);
    }
  }

  return combinations;
};

const combineFirstElementWithRandomOthers = (
  firstList,
  secondList,
  thirdList,
  outputFilePath
) => {
  const getRandomElementFromArray = (baseArray) => {
    const randomIndex = Math.floor(Math.random() * baseArray.length);
    return baseArray[randomIndex];
  };
  if (fs.existsSync(outputFilePath)){
    fs.unlinkSync(outputFilePath)
  }
  fs.writeFileSync(outputFilePath, "")
  firstList.map((firstListElement) => {
    const randomSecondElement = getRandomElementFromArray(secondList);
    const randomThirdElement = getRandomElementFromArray(thirdList);
    const outputData = `${firstListElement} ${randomSecondElement} ${randomThirdElement}`;
    console.log(outputData);
    fs.appendFileSync(outputFilePath, `${outputData}\r\n`)
  });
};

module.exports = {
  combineAllMatrixElements,
  combineFirstElementWithRandomOthers,
};
