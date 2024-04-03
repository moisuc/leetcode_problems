"use strict";
function getKey(s) {
    var charCodes = [];
    for (var i = 1; i < s.length; i++) {
        var diff = s.charCodeAt(i) - s.charCodeAt(i - 1);
        if (diff < 0) {
            diff += 26; // Wrap around for negative differences
        }
        charCodes.push(diff);
    }
    return charCodes.join(",");
}
function groupStrings(strings) {
    var map = new Map();
    for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
        var s = strings_1[_i];
        var key = getKey(s);
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.set(key, map.get(key).concat(s));
    }
    return Array.from(map.values());
}
console.log(groupStrings(["abc", "bcd"]));
//# sourceMappingURL=groupStrings.js.map