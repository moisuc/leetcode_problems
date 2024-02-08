var sortedSquares = function (nums) {
  let n = nums.length;
  let k = n - 1;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      let first = Math.pow(nums[j], 2);
      let second = Math.pow(nums[j + 1], 2);
      if (first > second) {
        let temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
      }
    }

    nums[k] *= nums[k];
    k--;
  }
  nums[0] *= nums[0];
  return nums;
};
