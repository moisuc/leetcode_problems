function minRemoveToMakeValid(s: string): string {
  const stack = [];
  const remove = new Set();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length === 0) {
        remove.add(i);
      } else {
        stack.pop();
      }
    }
  }
  stack.forEach((i) => remove.add(i));
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (!remove.has(i)) {
      res += s[i];
    }
  }
  return res;
}
