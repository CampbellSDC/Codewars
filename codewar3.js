//Write a function that sums all of the numbers from 1 to <n>
//Forgot to add the "return sum", so it wasn't getting back the final total

var summation = function (num) {
    let sum = 0
    for(var i=1; i <= num; i++){
      sum += i
    }
    return sum
  }