"use strict";
function isHappy(n) {
    var set = new Set();
    while (n !== 1) {
        if (set.has(n)) {
            return false;
        }
        set.add(n);
        var sum = 0;
        while (n > 0) {
            var digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }
        n = sum;
    }
    return true;
}
;
//# sourceMappingURL=isHappy.js.map