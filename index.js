require('dotenv').config()
const { getMatrixCombinations } = require("./src/combine");

const input = [
  ["bird", "dog", "duck"],
  ["eat", "bark", "fly"],
  ["home", "away", "here"],
];

console.log(getMatrixCombinations(input));
