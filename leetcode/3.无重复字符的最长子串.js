/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  let cache = new Map();
  let sArr = s.split("");
  let left = 0;
  let right = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = sArr[i];
    if (cache.has(cur) && cache.get(cur) >= left) {
      left = cache.get(cur) + 1;
      cache.set(cur, i);
    } else {
      cache.set(cur, i);
      right = i;
      max = Math.max(max, right - left + 1);
    }
  }
  return max;
};
let res = lengthOfLongestSubstring("aab");
console.log(res);
// @lc code=end
