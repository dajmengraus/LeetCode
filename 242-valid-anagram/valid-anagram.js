/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let count = new Map();

    for (let char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    for (let char of t) {
        if (!count.has(char) || count.get(char) === 0) {
            return false;
        } else {
            count.set(char, count.get(char) - 1);
        }
    }

    return true;
};