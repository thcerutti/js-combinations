const fs = require("fs");
const { combineFirstElementWithRandomOthers } = require("./src/combine");

const readFileContent = (path) =>
  fs
    .readFileSync(path, { encoding: "utf-8" })
    .split("\n")
    .filter((item) => item != "");

const validateInputFile = (path) => {
  if (!fs.existsSync(path)) {
    console.error(`Path ${path} does not exist!`);
  }
};

[process.argv[2], process.argv[3], process.argv[4]].map((filePath) => {
  validateInputFile(filePath);
});

const firstContent = readFileContent(process.argv[2]);
const secondContent = readFileContent(process.argv[3]);
const thirdContent = readFileContent(process.argv[4]);
const outputPath = process.argv[5];

console.log("firstPath:", firstContent);
console.log("secondPath:", secondContent);
console.log("thirdPath:", thirdContent);

try {
  combineFirstElementWithRandomOthers(
    firstContent,
    secondContent,
    thirdContent,
    outputPath
  );
} catch (error) {
  console.error("Houston, we have a problem: ", error);
}
