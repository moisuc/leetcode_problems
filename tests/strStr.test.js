const strStr = require("../strStr");

test(`strStr problem`, () => {
  expect(strStr("sadbutsad", "sad")).toBe(0);
  expect(strStr("leetcode", "leeto")).toEqual(-1);
  expect(strStr("leetcode", "")).toBe(-1);
});
