function groupAnagrams(strs: string[]): string[][] {
  let map = new Map<string, string[]>();
  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split("").sort().join("");
    if (map.has(sorted)) {
      map.get(sorted)?.push(strs[i]);
    } else {
      map.set(sorted, [strs[i]]);
    }
  }
  return Array.from(map.values());
}
