var removeElement = function (nums, val) {
  let n = nums.length;
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== val) {
      temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;

      j++;
    }
  }
  return [nums, j];
};
const nums = [3, 2, 2, 3];
const val = 3;
console.log(removeElement(nums, val));
