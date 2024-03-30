class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function gameResult(head: ListNode | null): string {
  if (head == null) {
    return "";
  }
  let score = [0, 0];
  let even: ListNode | null = head;
  while (even != null && even.next != null) {
    let odd: ListNode | null = even.next;
    if (even.val > odd?.val) {
      score[0]++;
    } else {
      score[1]++;
    }
    even = odd.next;
  }
  if (score[0] == score[1]) {
    return "Tie";
  }
  return score[0] > score[1] ? "Even" : "Odd";
}
