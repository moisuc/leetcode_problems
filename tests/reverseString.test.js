const reverseString = require("../reverseString");

test("reverse a string in place ", () => {
  expect(reverseString(["h", "e", "l", "l", "o"])).toEqual([
    "o",
    "l",
    "l",
    "e",
    "h",
  ]);
  expect(reverseString(["H", "a", "n", "n", "a", "h"])).toEqual([
    "h",
    "a",
    "n",
    "n",
    "a",
    "H",
  ]);
});
