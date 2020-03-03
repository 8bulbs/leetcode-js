/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
  if (B.length === 0 || n === 0) {
    console.warn('A', A)
    return
  } else if (m === 0) {
    for (let i = 0; i < n; ++i) {
      A[i] = B[i]
    }
    console.warn('A', A)
    return
  }
  let tailPointer = 0
  while (A[tailPointer + 1] !== 0) {
    tailPointer++
  }
  for (let i = 0; i < n; ++i) {
    if (B[i] < A[tailPointer]) {
      // let tailPointerCopy = tailPointer
      // while (tailPointerCopy > 0 && A[tailPointerCopy] > B[i]) {
      //   tailPointerCopy--
      // }
      // for (let i = tailPointer + 1; i > tailPointerCopy; --i) {
      //   A[i] = A[i - 1]
      // }
      // A[tailPointerCopy] = B[i]
      // tailPointer++
      for (let j = tailPointer - 1;;--j) {
        if (A[j] <= B[i]) {

          break
        }
        if (j === -1) {

          break
        }
      }
    } else {
      A[++tailPointer] = B[i]
    }
    console.warn('A', A)
  }
};

// let A = [1,2,3,0,0,0]
// let m = 3
// let B = [2,5,6]
// let n = 3

// var A = [0], m = 0, B = [1], n = 1

// merge=(A, m, B, n)
// 先暴力
var merge = function(A, m, B, n) {
  for (let i = 0; i < n; ++i) {
    A[m + i] = B[i]
  }
  A.sort((a, b) => b - a)
}