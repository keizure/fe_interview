/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.arr = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.arr;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let copy = [...this.arr];
  for (let i = copy.length - 1; i >= 0; i--) {
    let target = Math.floor(Math.random() * (i + 1));
    // 0 <= Math.random() < 1
    [copy[i], copy[target]] = [copy[target], copy[i]];
  }
  return copy;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end
