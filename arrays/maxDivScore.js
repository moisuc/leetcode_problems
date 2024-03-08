"use strict";
function maxDivScore(nums, divisors) {
    var scores = Array.from({ length: divisors.length }, function () { return 0; });
    divisors.sort(function (a, b) { return a - b; });
    var max = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < divisors.length; j++) {
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
//# sourceMappingURL=maxDivScore.js.map