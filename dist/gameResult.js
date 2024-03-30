"use strict";
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function gameResult(head) {
    if (head == null) {
        return "";
    }
    let score = [0, 0];
    let even = head;
    while (even != null && even.next != null) {
        let odd = even.next;
        if (even.val > (odd === null || odd === void 0 ? void 0 : odd.val)) {
            score[0]++;
        }
        else {
            score[1]++;
        }
        even = odd.next;
    }
    if (score[0] == score[1]) {
        return "Tie";
    }
    return score[0] > score[1] ? "Even" : "Odd";
}
//# sourceMappingURL=gameResult.js.map