// - What is upwards movement?
// Upwards movement is when we iterate backwards to each subarray,
// moving one index forward in the subarray each time.

// - What is downwards movement?
// Downwards movement is when we iterate forwards to each subarray,
// moving one index backwards in the subarray each time.

// - What is the rule for when we flip from upwards to downwards, and vice versa?
// We switch when we hit any wall; hitting a side wall is hitting the first/array item
// in any given subarray, and hitting a top/bottom wall is hitting the first/last subarray.

// - When we hit a wall, where do we start up again?
// If we hit a side wall, we start in the next subarray, on the same index.
// If we hit a top/bottom wall, we start in the same subarray, on the next index.

var findDiagonalOrder = function (mat) {
  let n = mat.length - 1;
  let m = mat[0].length - 1;
  let i = 0;
  let j = 0;
  let direction = "up";
  let finish = true;
  let pars = [];
  while (finish) {
    pars.push(mat[i][j]);
    if (i == n && j == m) {
      finish = false;
      break;
    }

    if (direction == "up") {
      if (j == m) {
        direction = "down";
        i++;
      } else if (i == 0) {
        direction = "down";
        j++;
      } else {
        i--;
        j++;
      }
    } else if (direction == "down") {
      if (i == n) {
        direction = "up";
        j++;
      } else if (j == 0) {
        direction = "up";
        i++;
      } else {
        i++;
        j--;
      }
    }
  }
  return pars;
};

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(findDiagonalOrder(mat));
