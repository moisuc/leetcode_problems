const twoSum = require("../twoSum2");

describe("Two Sum II - Input array is sorted", () => {
  test("numbers = [2,7,11,15], target = 9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2]);
  });
  test("numbers = [2,3,4], target = 6", () => {
    expect(twoSum([2, 3, 4], 6)).toStrictEqual([1, 3]);
  });

  test("[-1,0], target = -1", () => {
    expect(twoSum([-1, 0], -1)).toStrictEqual([1, 2]);
  });
});
