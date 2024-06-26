"use strict";
function getKey(s) {
    const charCodes = [];
    for (let i = 1; i < s.length; i++) {
        let diff = s.charCodeAt(i) - s.charCodeAt(i - 1);
        if (diff < 0) {
            diff += 26; // Wrap around for negative differences
        }
        charCodes.push(diff);
    }
    return charCodes.join(",");
}
function groupStrings(strings) {
    const map = new Map();
    for (const s of strings) {
        const key = getKey(s);
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.set(key, map.get(key).concat(s));
    }
    return Array.from(map.values());
}
console.log(groupStrings(["abc", "bcd"]));
//# sourceMappingURL=groupStrings.js.map