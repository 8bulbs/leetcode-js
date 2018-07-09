// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:

// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:

// 必须在原数组上操作，不能拷贝额外的数组。 不return
// 尽量减少操作次数。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let ln = nums.length
    // 从后往前遍历更优, 固定了次数
    for (let i = 0; i < ln; i++) {
      if (nums[i] === 0) {	
        nums.splice(i--, 1)
        nums.push(0)
        ln--
      }
    }
    // let left = []
    // let right = []
    // for (let i = 0; i < nums.length; i++) {
    //   if (nums[i] === 0) {	
    //     right.push(0)
    //   } else {
    //     left.push(nums[i])
    //   }
    // }
    // return left.concat(right)
}
const test = [0,1,0,3,12]
console.log(moveZeroes(test))