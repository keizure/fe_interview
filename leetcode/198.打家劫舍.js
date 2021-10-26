/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let first = nums[0];
  let second = Math.max(nums[0], nums[1]);
  for (let index = 2; index < nums.length; index++) {
    [first, second] = [second, Math.max(first + nums[index], second)];
  }
  return second;
};
// @lc code=end
