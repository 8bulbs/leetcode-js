// 输入: 19
// 输出: true
// 解释:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n === 1) {
    return true
  }
  const memory = {}
  while (n !== 1) {
    let arr = (n + '').split('')
    n = 0
    arr.forEach(item => {
      n += Math.pow(item, 2)
    })
    if (n === 1) {
      return true
    }
    if (memory[n] === undefined) {
      memory[n] = 1
    } else {
      break
    }
  }
  return false
};

var isHappy = function (n) {
  let slowPointer = n
  let fastPointer = n
  function getBitSum (n) {
    let sum = 0
    while (n !== 0) {
      const bit = n % 10
      sum += bit * bit
      n = parseInt(n / 10)
    }
    return sum
  }
  do {
    slowPointer = getBitSum(slowPointer)
    fastPointer = getBitSum(getBitSum(fastPointer))
  } while (slowPointer !== fastPointer)
  return slowPointer === 1
}