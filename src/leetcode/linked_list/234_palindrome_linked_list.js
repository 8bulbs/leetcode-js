/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head === null) {
    return true
  }
  let headPointer = head
  let tailPointer = head
  while (tailPointer.next) {
    tailPointer.next.prev = tailPointer
    tailPointer = tailPointer.next
  }
  while(headPointer !== tailPointer) {
    if (headPointer.next !== tailPointer) {
      if (headPointer.val === tailPointer.val) {
        headPointer = headPointer.next
        tailPointer = tailPointer.prev
      } else {
        return false
      }
    } else {
      return headPointer.val === tailPointer.val
    }
  }
  return true
};