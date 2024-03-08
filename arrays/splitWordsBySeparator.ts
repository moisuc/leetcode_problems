function splitWordsBySeparator(words: string[], separator: string): string[] {
  let ret: string[] = [];
  for (let i = 0; i < words.length; i++) {
    let splitted = words[i].split(separator).filter((n) => n !== "");
    ret.push(...splitted);
  }
  return ret;
}
