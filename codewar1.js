//Documenting each completed Codewars kyu

//Create  function that removes the first and last letters from a string

function removeChar(str){
    return str.slice(1,str.length-1 )
   
   };


//Create a function that returns the smallest integer from an array

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
      
    }
  }

//Write a function that sums all of the numbers from 1 to <n>
//Forgot to add the "return sum", so it wasn't getting back the final total

var summation = function (num) {
    let sum = 0
    for(var i=1; i <= num; i++){
      sum += i
    }
    return sum
  }


//   This code does not execute properly. Try to figure out why
// Original code did not include "return", so you get nothing back when running the function
  function multiply(a, b){
    return a * b
  }


// Complete a function that reverses a string that is passed into it
  function solution(str){
    return str.split('').reverse().join('');  
  }
  

  // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(num){
  let sum = 0
  for(let i = 1; i <= num; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
       console.log(sum) //Just so I can see if it was working
    }
  }
  return sum
  
}

solution(25)
