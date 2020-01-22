/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let arr = []
  function travalsalTreeMiddle (node) {
    if (node !== null) {
      travalsalTreeMiddle(node.left)
      arr.push(node.val)
      travalsalTreeMiddle(node.right)
    }
  }
  travalsalTreeMiddle(root)
  return arr[k - 1]
};

var kthSmallest = function(root, k) {
  let arr = []
  function travalsalTreeMiddle (node) {
    if (node !== null && arr.length < k) {
      travalsalTreeMiddle(node.left)
      arr.push(node.val)
      travalsalTreeMiddle(node.right)
    }
  }
  travalsalTreeMiddle(root)
  return arr[k - 1]
};

var kthSmallest = function(root, k) {
  let res
  let count = 0
  function travalsalTreeMiddle (node) {
    if (node !== null) {
      if (count < k) {
        travalsalTreeMiddle(node.left)
      }
      if (++count === k) {
        res =  node.val
      }
      if (count < k) {
        travalsalTreeMiddle(node.right)
      }
    }
  }
  travalsalTreeMiddle(root)
  return res
};