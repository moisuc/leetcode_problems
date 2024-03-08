"use strict";
function splitWordsBySeparator(words, separator) {
    var ret = [];
    for (var i = 0; i < words.length; i++) {
        var splitted = words[i].split(separator).filter(function (n) { return n !== ""; });
        ret.push.apply(ret, splitted);
    }
    return ret;
}
//# sourceMappingURL=splitWordsBySeparator.js.map