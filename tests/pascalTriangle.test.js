const pascalTriangle = require("../pascalTriangle");

test("pascal triangle of 5 to be [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]", () => {
  expect(pascalTriangle(5)).toEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
  ]);
});
