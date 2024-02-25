var longestCommonPrefix = function (strs) {
  if (strs.length == 1) {
    return strs[0];
  }
  let pref = "";
  for (let i = 0; i <= strs[0].length; i++) {
    pref = strs[0].substring(0, i);
    for (let j = 0; j < strs.length; j++) {
      if (pref != strs[j].substring(0, i)) {
        return pref.substring(0, i - 1);
      }
    }
  }
  return pref;
};

module.exports = longestCommonPrefix;
