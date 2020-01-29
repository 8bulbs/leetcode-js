/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if (s.length < t.length) {
    return ''
  } else {
    let leftPointer = 0
    let rightPointer = 0
    let windowHashTable = {}
    let res = s
    let existFlag = false
    const targetHashTable = {}
    // 生成目标哈希表
    for (let i = t.length - 1; i >= 0; i--) {
      if (targetHashTable[t[i]] === undefined) {
        targetHashTable[t[i]] = 1
      } else {
        targetHashTable[t[i]]++
      }
    }
    function isFit (windowHashTable, targetHashTable) {
      for (let str in targetHashTable) {
        if (windowHashTable[str] === undefined) {
          return false
        } else {
          if (windowHashTable[str] < targetHashTable[str]) {
            return false
          }
        }
      }
      existFlag = true
      return true
    }
    while (rightPointer < s.length) {
      const currentStr = s[rightPointer]
      if (windowHashTable[currentStr] === undefined) {
        windowHashTable[currentStr] = 1
      } else {
        windowHashTable[currentStr]++
      }
      rightPointer++
      while (isFit(windowHashTable, targetHashTable)) {
        const _res = s.substring(leftPointer, rightPointer)
        if (_res.length < res.length) {
          res = _res
        }
        const currentStr = s[leftPointer]
        windowHashTable[currentStr]--
        leftPointer++
      }
    }
    return existFlag ? res : ''
  }
};

// var s = 'ADOBECODEBANC'
// var t = 'ABC'

// minWindow(s, t)
