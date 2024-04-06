function makeGood(s: string): string {
  if (s.length == 1) {
    return s;
  }
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length == 0) {
      stack.push(s[i]);
    } else {
      let last = stack[stack.length - 1];
      if (last.toLowerCase() == s[i].toLowerCase() && last != s[i]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }
  return stack.join("");
}
