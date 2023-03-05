const {
  combineAllMatrixElements,
  combineFirstElementWithRandomOthers,
} = require("../src/combine");

describe("given a `combineAllMatrixElements` function", () => {
  describe("when received a given matrix", () => {
    it("should create all combinations on simetric matrix", () => {
      const input = [
        ["bird", "dog", "duck"],
        ["eat", "bark", "fly"],
        ["home", "away", "here"],
      ];
      const expected = Math.pow(input[0].length, input.length);
      const output = combineAllMatrixElements(input);
      expect(output.length).toBe(expected);
    });

    it("should create all combinations on assimetric matrix", () => {
      const input = [
        ["a", "b", "c"],
        ["1", "2", "3"],
        ["x", "y"],
      ];
      const expected = input[0].length * input[1].length * input[2].length;
      const output = combineAllMatrixElements(input);
      expect(output.length).toBe(expected);
    });
  });
});

describe("given an `combineFirstElementWithRandomOthers` function", () => {
  describe('when received three inputs', () => {
    const input1 = ['a', 'b', 'c']
    const input2 = ['1', '2', '3', '4', '5']
    const input3 = ['x', 'y', 'z']
    it('should return the variations', () => {
      const outputPath = 'random-output.txt'
      combineFirstElementWithRandomOthers(input1, input2, input3, outputPath)
    })
  })
});
