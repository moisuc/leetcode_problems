function makeGood(s) {
    if (s.length == 1) {
        return s;
    }
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (stack.length == 0) {
            stack.push(s[i]);
        }
        else {
            var last = stack[stack.length - 1];
            if (last.toLowerCase() == s[i].toLowerCase() && last != s[i]) {
                stack.pop();
            }
            else {
                stack.push(s[i]);
            }
        }
    }
    return stack.join("");
}
