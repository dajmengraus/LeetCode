/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let longest = 0;

    for (let n of set) {
        if (!set.has(n - 1)) {
            let length = 1;

            while (set.has(n + length)) {
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
};