"use strict";
function validMountain(arr) {
    if (arr.length < 3) {
        return false;
    }
    var peek = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            return false;
        }
        if (arr[i] < arr[i + 1]) {
            continue;
        }
        else {
            peek = i;
            if (peek == 0 || peek == arr.length - 1) {
                return false;
            }
            for (var j = peek; j < arr.length; j++) {
                if (arr[j] <= arr[j + 1]) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
;
console.log(validMountain([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
//# sourceMappingURL=Valid_mountain.js.map