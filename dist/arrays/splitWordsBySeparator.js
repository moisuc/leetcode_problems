"use strict";
function splitWordsBySeparator(words, separator) {
    let ret = [];
    for (let i = 0; i < words.length; i++) {
        let splitted = words[i].split(separator).filter((n) => n !== "");
        ret.push(...splitted);
    }
    return ret;
}
//# sourceMappingURL=splitWordsBySeparator.js.map