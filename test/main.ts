import MyQueue from '../lib/leetcode_playground.es.js'

const queue = new MyQueue()
queue.push(1)
queue.push(2)
console.warn(queue.peek(), JSON.stringify(queue))
console.warn(queue.pop(), queue)
// console.warn(queue.empty(), queue)
