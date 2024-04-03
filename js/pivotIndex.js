var pivotIndex = function (nums) {
  let sumLeft = [];

  let n = nums.length;
  for (let i = 1; i < n; i++) {
    sumLeft[i - 1] = sumLeft[i - 1] == undefined ? 0 : sumLeft[i - 1];
    sumLeft[i] = nums[i - 1] + sumLeft[i - 1];
  }

  let sumRight = [];

  for (let i = n - 2; i >= 0; i--) {
    sumRight[i + 1] = sumRight[i + 1] == undefined ? 0 : sumRight[i + 1];
    sumRight[i] = nums[i + 1] + sumRight[i + 1];
  }
  for (let j = 0; j < n; j++) {
    if (sumLeft[j] == sumRight[j]) {
      return j;
    }
  }
  return -1;
};

let nums = [2, 1, -1];
console.log(pivotIndex(nums));
