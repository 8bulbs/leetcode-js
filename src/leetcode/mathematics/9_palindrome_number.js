/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false
  } else if (x >= 0 && x < 10) {
      return true
  }  else {
      let reverse = ''
      let cur = x
      while (cur / 10 > 0) {
          reverse += cur % 10
          cur = Math.floor(cur / 10)
      }
      // console.warn('reverse', reverse)
      return reverse * 1 === x
  }
};

var isPalindrome = function(x) {
  if (x < 0) {
    return false
  } else if (x >= 0 && x < 10) {
      return true
  }  else {
      let reverse = 0
      let cur = x
      while (cur / 10 > 0) {
          reverse = reverse * 10 + cur % 10
          cur = Math.floor(cur / 10)
      }
      return reverse === x
  }
};

console.warn(isPalindrome(121))