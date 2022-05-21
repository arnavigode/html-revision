function pushh(array, ...items) {
    return [
      ...array,
      ...items
    ]
  }
  function popp(array) {
    let res = []
    for (let i = 0; i < array.length - 1; i++) {
      res[i] = array[i]
    }
    
    return res
  }
  function top(array) { 
      var ans 
    for (let i = 0; i < array.length; i++) {
        ans = array[i];
      }
    return ans
  }
  function reversearr(array) { 
    let ans = "";
  for (let i = array.length-1; i >= 0; i--) {
      ans += array[i] + " ";
    }
  return ans
}
  function len(array) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
      count++;
    }  
    return count
  }
  function print(array) {
    let ans = ""
    for (let i = 0; i < array.length; i++) {
        ans += array[i] + " ";
    }  
    return ans
  }
  let num = [1, 2, 3, 4]
//   num = pushh(num, 8)
//   num = popp(num)
//   num = pushh(num, 8)
//   num = len(num)
//   num = top(num)
//   num = reversearr(num)
num = print(num)
console.log(num)