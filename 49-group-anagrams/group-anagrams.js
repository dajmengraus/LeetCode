/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for (let s of strs) {
        let sort = s.split('').sort().join('');
        if (!map.has(sort)) {
            map.set(sort, []);
        }
        map.get(sort).push(s);
    }
    return Array.from(map.values());
};