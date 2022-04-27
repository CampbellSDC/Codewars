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
  

