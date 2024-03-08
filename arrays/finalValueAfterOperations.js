"use strict";
function finalValueAfterOperations(operations) {
    var sum = 0;
    for (var i = 0; i < operations.length; i++) {
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