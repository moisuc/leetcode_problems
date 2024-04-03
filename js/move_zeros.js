var moveZeroes = function (nums) {
  const n = nums.length;
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0 && n > 1) {
      temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++;
    }
  }
  return nums;
};
const nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
