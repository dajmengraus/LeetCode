/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let count = {};
    let left = 0;
    let maxFreq = 0;
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        count[char] = (count[char] || 0) + 1;

        // Track the highest frequency in the window
        maxFreq = Math.max(maxFreq, count[char]);

        // If replacements needed > k, shrink window
        while ((right - left + 1) - maxFreq > k) {
            count[s[left]]--;
            left++;
        }

        // Update result
        result = Math.max(result, right - left + 1);
    }

    return result;
};
