// 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

// 示例:

// 输入: "25525511135"
// 输出: ["255.255.11.135", "255.255.111.35"]

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  findTheFirstAndCheckTheRest(s, 1, 3)
  for (let i = 1; i < 5; i++) {
    let subStr = findTheFirstAndCheckTheRest(s, i, 4 - i)
  }
  function findTheFirstAndCheckTheRest(str, firstLength, restCount) {
    let first = str.slice(0, firstLength)
    console.log('first', first)
    let rest = str.slice(firstLength)
    console.log('rest', rest)
    if (rest.length > restCount * 3 || rest.length < restCount) {
      return false
    } else {
      return first
    }

  }
};

restoreIpAddresses('25525511135')