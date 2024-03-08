function maxDivScore(nums: number[], divisors: number[]): number {
  let scores: number[] = Array.from({ length: divisors.length }, () => 0);
  divisors.sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < divisors.length; j++) {
      if (nums[i] % divisors[j] == 0) {
        scores[j]++;
        if (scores[j] > max) {
          max = scores[j];
        }
      }
    }
  }

  return divisors[scores.indexOf(max)];
}
