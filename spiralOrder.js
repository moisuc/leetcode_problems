var spiralOrder = function (n) {
  let result = [];
  let top = 0;
  let bottom = n.length - 1;
  let left = 0;
  let right = n[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(n[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(n[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(n[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(n[i][left]);
      }
      left++;
    }
  }
  return result;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(spiralOrder(matrix));
