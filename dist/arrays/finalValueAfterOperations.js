"use strict";
function finalValueAfterOperations(operations) {
    let sum = 0;
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case '++X':
            case 'X++':
                sum++;
                break;
            default:
                sum--;
                break;
        }
    }
    return sum;
}
;
//# sourceMappingURL=finalValueAfterOperations.js.map