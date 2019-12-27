/**
 * @param {number[]} nums
 * @return {number}
 */
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// [-2, 1, -2, 4,  3, 5, 6, -1, 4]

// [-2, 1,  1, 4,  4, 5, 6,  6, 6]

var maxSubArray = function(nums) {
  let currentIndexMaxSum = nums[0]
  let histortyMaxSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    currentIndexMaxSum = Math.max(nums[i], nums[i] + currentIndexMaxSum)
    histortyMaxSum = Math.max(histortyMaxSum, currentIndexMaxSum)
  }
  return histortyMaxSum
};