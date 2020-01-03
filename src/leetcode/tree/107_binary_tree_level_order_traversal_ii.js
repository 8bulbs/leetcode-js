/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (root === null) {
    return []
  }
  let res = []
  function travelsal (root, depth) {
    if (root !== null) {
      if (!res[depth]) {
        res[depth] = []
      }
      travelsal(root.left, depth + 1)
      res[depth].push(root.val)
      travelsal(root.right, depth + 1)
    }
  }
  travelsal(root, 0)
  return res.reverse()
};