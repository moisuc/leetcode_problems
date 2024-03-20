"use strict";
function containsNearbyDuplicate(nums, k) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
}
//# sourceMappingURL=containsNearbyDuplicate.js.map