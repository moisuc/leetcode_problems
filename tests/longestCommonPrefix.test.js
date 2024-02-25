const longestCommonPrefix = require("../longestCommonPrefix");

test("Write a function to find the longest common prefix string amongst an array of strings.", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("");
  expect(longestCommonPrefix(["flower", "flower", "flower", "flower"])).toEqual(
    "flower"
  );
  expect(longestCommonPrefix(["a"])).toEqual("a");
});
