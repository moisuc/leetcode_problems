"use strict";
function numJewelsInStones(jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            count++;
        }
    }
    return count;
}
//# sourceMappingURL=numJewelsInStones.js.map