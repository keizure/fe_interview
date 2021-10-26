/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let version1Arr = version1.split(".");
  let version2Arr = version2.split(".");
  for (
    let index = 0;
    index < Math.max(version2Arr.length, version1Arr.length);
    index++
  ) {
    let v1Cur = parseInt(version1Arr[index] || "0");
    let v2Cur = parseInt(version2Arr[index] || "0");
    if (v1Cur > v2Cur) {
      return 1;
    } else if (v2Cur > v1Cur) {
      return -1;
    }
  }
  return 0;
};
// @lc code=end
