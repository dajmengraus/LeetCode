/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
  const deque = []; // stores indices
  const result = [];

  for (let i = 0; i < nums.length; i++) {

    // 1. Remove indices outside the window
    while (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // 2. Remove smaller values from the back
    while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }

    // 3. Add current index
    deque.push(i);

    // 4. Add max to result
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}
