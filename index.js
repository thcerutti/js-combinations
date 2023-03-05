require("dotenv").config();
const { combineAllMatrixElements } = require("./src/combine");

const input = [
  ["bird", "dog", "duck"],
  ["eat", "bark", "fly"],
  ["home", "away", "here"],
];

console.log(combineAllMatrixElements(input));
