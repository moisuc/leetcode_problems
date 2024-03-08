var reverseWords = function (s) {
  let words = s.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = word.length - 1; j >= 0; j--) {
      result += word[j];
    }

    result += " ";
  }
  return result.trim();
};

console.log(reverseWords("Let's take LeetCode contest"));
