var rowAndMaximumOnes = function (mat) {
  let row = 0;
  let max = 0;
  let ones = 0;
  for (let i = 0; i < mat.length; i++) {
    ones = 0;
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 1) {
        ones++;
      }
    }
    if (ones > max) {
      row = i;
      max = ones;
    }
  }
  return [row, ones];
};

console.log(
  rowAndMaximumOnes([
    [0, 0],
    [1, 1],
    [0, 0],
  ])
);
