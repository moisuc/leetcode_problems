"use strict";
function lengthOfLongestSubstringTwoDistinct(s) {
    let left = 0;
    let right = 0;
    let map = new Map();
    let max = 0;
    while (right < s.length) {
        map.set(s[right], (map.get(s[right]) || 0) + 1);
        while (map.size > 2) {
            map.set(s[left], map.get(s[left]) - 1);
            if (map.get(s[left]) === 0) {
                map.delete(s[left]);
            }
            left++;
        }
        max = Math.max(max, right - left + 1);
        right++;
    }
    return max;
}
//# sourceMappingURL=lengthOfLongestSubstringTwoDistinct.js.map