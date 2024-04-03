"use strict";
function twoSum(nums, target) {
    let hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hashMap.has(complement)) {
            return [hashMap.get(complement), i];
        }
        hashMap.set(nums[i], i);
    }
    return [];
}
;
//# sourceMappingURL=twoSumHashMap.js.map