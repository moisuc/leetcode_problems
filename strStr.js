var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return -1;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substring(i, i + needle.length) === needle) {
        return i;
      }
    }
  }

  return -1;
};

module.exports = strStr;
