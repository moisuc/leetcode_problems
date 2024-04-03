"use strict";
function groupAnagrams(strs) {
    var _a;
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split("").sort().join("");
        if (map.has(sorted)) {
            (_a = map.get(sorted)) === null || _a === void 0 ? void 0 : _a.push(strs[i]);
        }
        else {
            map.set(sorted, [strs[i]]);
        }
    }
    return Array.from(map.values());
}
//# sourceMappingURL=groupAnagrams.js.map