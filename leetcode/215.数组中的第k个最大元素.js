/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let heapSize = nums.length;
  for (let index = Math.floor(nums.length / 2 - 1); index >= 0; index--) {
    maxHeap(nums, index, heapSize);
  }
  for (let index = nums.length - 1; index >= nums.length - k; index--) {
    swap(nums, 0, index);
    heapSize--;
    maxHeap(nums, 0, heapSize);
  }
  return nums[nums.length - k];
};
function maxHeap(arr, i, heapSize) {
  let l = i * 2 + 1;
  let r = l + 1;
  let largest = i;
  if (l < heapSize && arr[largest] < arr[l]) {
    largest = l;
  }
  if (r < heapSize && arr[largest] < arr[r]) {
    largest = r;
  }
  if (largest !== i) {
    swap(arr, largest, i);
    maxHeap(arr, largest, heapSize);
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
// @lc code=end
