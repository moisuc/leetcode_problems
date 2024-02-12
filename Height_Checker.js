/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let sorted = [...heights];
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      if (sorted[j] > sorted[j + 1]) {
        let temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }
  let spot = 0;

  for (i = 0; i < heights.length; i++) {
    if (heights[i] != sorted[i]) {
      spot++;
    }
  }
  return spot;
};

let heights = [1, 1, 4, 2, 1, 3];
console.log(heightChecker(heights));
