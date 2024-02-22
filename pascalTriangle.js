function pascalTriangle(numRows) {
  let pascalTriangle = [];
  for (let i = 0; i < numRows; i++) {
    pascalTriangle[i] = new Array(i + 1);
    pascalTriangle[i][0] = 1;
    pascalTriangle[i][i] = 1;
    for (let j = 1; j < i; j++) {
      pascalTriangle[i][j] =
        pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
    }
  }
  return pascalTriangle;
}
module.exports = pascalTriangle;
