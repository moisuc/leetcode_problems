"use strict";
function twoSum(nums, target) {
    var hashMap = new Map();
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (hashMap.has(complement)) {
            return [hashMap.get(complement), i];
        }
        hashMap.set(nums[i], i);
    }
    return [];
}
;
//# sourceMappingURL=twoSumHashMap.js.map