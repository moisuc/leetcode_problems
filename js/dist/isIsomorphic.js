"use strict";
function isIsomorphic(s, t) {
    let hashMap = new Map();
    if (s.length !== t.length)
        return false;
    for (let i = 0; i < s.length; i++) {
        if (hashMap.has(s[i])) {
            if (hashMap.get(s[i]) !== t[i])
                return false;
        }
        else {
            if (Array.from(hashMap.values()).includes(t[i]))
                return false;
            hashMap.set(s[i], t[i]);
        }
    }
    return true;
}
;
//# sourceMappingURL=isIsomorphic.js.map