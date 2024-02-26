const arrayPairSum = require("../arrayPairSum");

describe("All possible pairings", () => {
  test("nums = [1,4,3,2]", () => {
    expect(arrayPairSum([1, 4, 3, 2])).toBe(4);
  });
  test("nums = [6,2,6,5,1,2]", () => {
    expect(arrayPairSum([6, 2, 6, 5, 1, 2])).toBe(9);
  });
});
