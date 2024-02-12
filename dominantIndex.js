var dominantIndex = function (nums) {
  //     sorteaza apoi compara ulimele 2 numere
  let max = -Infinity;
  let maxIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= max) {
      max = nums[i];
      maxIdx = i;
    }
  }

  for (i = 0; i < nums.length; i++) {
    if (i != maxIdx && nums[i] * 2 > max) {
      return -1;
    }
  }
  return maxIdx;
};

let nums = [3, 6, 1, 0];
console.log(dominantIndex(nums));
