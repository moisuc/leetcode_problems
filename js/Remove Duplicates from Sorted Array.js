/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      for (let j = i; j < n; j++) {
        nums[j] = nums[j + 1];
      }
      n--;
      i--;
    }
  }
  return n;
};