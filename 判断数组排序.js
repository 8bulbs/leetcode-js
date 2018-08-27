const arr = [ 3, 2, 3]

function orderType (arr) {	
  let ascendentCount = 0
  let decendentCount = 0
  let equalCount = 0
  let result = ''
  const len = arr.length - 1
  for (let i = len; i > 0; i--) {
    if (arr[i] > arr[i - 1]) {	
      ascendentCount++
    } else if (arr[i] < arr[i - 1]) {
      decendentCount++
    } else {
      equalCount++
    }
  }
  if (equalCount === len) {	
    result = '平序'
  } else if (ascendentCount + equalCount === len && decendentCount === 0) {	
    result = '升序'
  } else if (decendentCount + equalCount === len && ascendentCount === 0) {	
    result = '降序'
  } else {
    result = '乱序'
  }
  return result
}


orderType(arr)
