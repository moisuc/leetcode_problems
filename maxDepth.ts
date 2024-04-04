function maxDepth(s: string): number {
  let maxDepth = 0;
  let currentDepth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      currentDepth++;
      maxDepth = Math.max(maxDepth, currentDepth);
    } else if (s[i] === ")") {
      currentDepth--;
    }
  }
  return maxDepth;
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // 3
