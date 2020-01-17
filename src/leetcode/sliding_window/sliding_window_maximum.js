/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const res = []
  let min = nums[0]
  let max = nums[0]
  for (let i = 1; i < k - 1; i++) {
    if (nums[i] < min) {
      min = nums[i]
    }
    if (nums[i] > max) {
      max = nums[i]
    }
  }
  res.push(max)
  for (let j = 1; j < nums.length - k; j++) {
    
  }

};