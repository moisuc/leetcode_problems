var diagonalSum = function (mat) {
  let n = mat.length;
  let sum = 0;
  let i = 0;
  let j = 0;
  let k = n - 1;
  while (i !== n) {
    sum += mat[i][j];
    if (j !== k) {
      sum += mat[i][k];
    }
    i++;
    j++;
    k--;
  }

  return sum;
};

console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);
