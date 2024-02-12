var thirdMax = function (nums) {
  let j = 0;
  let max_3 = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
    }
    if (nums[i] == nums[i + 1]) {
      continue;
    }
    if ((j + 1) % 3 == 0 && max_3 <= nums[j]) {
      return nums[i];
    }
    j++;
  }
  //   console.log(max_3, max);
  return max;
};
let nums = [1, 2, 2, 5, 3, 5];
console.log(thirdMax(nums));
