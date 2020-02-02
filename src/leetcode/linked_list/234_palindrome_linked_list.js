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
  // 考虑空链表
  if (head === null) {
    return true
  } else {
    // 头指针
    let headPointer = head
    // 尾指针
    let tailPointer = head
    // 把链表变成双向链表
    while (tailPointer.next) {
      tailPointer.next.prev = tailPointer
      tailPointer = tailPointer.next
    }
    // 分别从头尾向中间依次比较
    while(headPointer !== tailPointer) {
      if (headPointer.next !== tailPointer) {
        if (headPointer.val === tailPointer.val) {
          headPointer = headPointer.next
          tailPointer = tailPointer.prev
        } else {
          return false
        }
      // 考虑偶数链表
      } else {
        return headPointer.val === tailPointer.val
      }
    }
    return true
  }
};