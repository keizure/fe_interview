/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let right = nums.length - 1;
  let left = 0;
  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};
let res = search([-1, 0, 3, 5, 9, 12], 2);
console.log(res);
// @lc code=end
