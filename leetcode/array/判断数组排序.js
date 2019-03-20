const arr = [1, 2, 3]

function getArrOrder (arr) {	
  let ascendentCount = 0
  let decendentCount = 0
  let result = ''
  const len = arr.length - 1
  for (let i = len; i > 0; i--) {
    if (arr[i] > arr[i - 1]) {	
      if (decendentCount) {	
        return '乱序'
      }
      ascendentCount++
    } else if (arr[i] < arr[i - 1]) {
      if (ascendentCount) {	
        return '乱序'
      }
      decendentCount++
    }
  }
  if (ascendentCount === 0 && decendentCount === 0) {	
    result = '平序'
  } else if (decendentCount === 0) {	
    result = '升序'
  } else {	
    result = '降序'
  }
  return result
}

console.log(getArrOrder(arr))
