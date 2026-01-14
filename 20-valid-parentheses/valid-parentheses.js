/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"]
    ])
    
    let stack = [];

    for (char of s) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else {
            if (stack[stack.length - 1] === map.get(char)) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return !stack.length;
};