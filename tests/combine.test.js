const { getMatrixCombinations } = require("../src/combine");

describe("given a `combine` function", () => {
  describe("when received a given matrix", () => {
    it("should create all combinations on simetric matrix", () => {
      const input = [
        ["bird", "dog", "duck"],
        ["eat", "bark", "fly"],
        ["home", "away", "here"],
      ];
      const expected = Math.pow(input[0].length, input.length);
      const output = getMatrixCombinations(input);
      expect(output.length).toBe(expected);
    });

    it("should create all combinations on assimetric matrix", () => {
      const input = [
        ["a", "b", "c"],
        ["1", "2", "3"],
        ["x", "y"],
      ];
      const expected = input[0].length * input[1].length * input[2].length;
      const output = getMatrixCombinations(input);
      expect(output.length).toBe(expected);
    });
  });
});
