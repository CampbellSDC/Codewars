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


// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// SOLUTION: parseInt() - parses a string and returns a whole number

const stringToNumber = function(str){
  return parseInt(str)
   
 }


//  Introduction

//  The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
 
// Task
 
//  Given a year, return the century it is in.

// SOLUTION:

 function century(year) {

  return Math.ceil(year/100);
}



// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Had to look this one up, but the "eval" function takes strings and returns the value of that string considered
// as a math operation. So, in this case, you would just place the operator in between the two values

// SOLUTION:

function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2)
}



// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// This was a tough one, as I had not used a for...of loop up to this point. 

// SOLUTION:


function getCount(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  
for (let char of str){
  if (vowels.includes(char)){
    vowelsCount++
  }
}
  
  return vowelsCount;
}