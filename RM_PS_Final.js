// Remontada Final Problem Solving Task
// ============================================================

// 01. Solve Me First

var solveMeFirst = function (a, b) {
  return a + b;
};
console.log(solveMeFirst(2, 3));

// 02. Multiply

var multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 5));

//  03. Even or Odd

var evenOrOdd = function (number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
console.log(evenOrOdd(7));

// 04. Return Negative

var makeNegative = function (number) {
  if (number > 0) {
    return -number;
  } else {
    return number;
  }
};
console.log(makeNegative(8));

// 05. Opposite Number

var opposite = function(number) {
 	return -number;
 };
 console.log(opposite(-7));

//  06. Simple Array Sum

var simpleArraySum = function(ar) {
 	let sum = 0;
   for(let i =0 ; i< ar.length; i++){
    sum = sum + ar[i]
   }
   return sum;
 };
 console.log(simpleArraySum([1,2,3,4]));

//  07. sleepIn

var sleepIn = function(weekday, vacation) {
 	return !weekday || vacation;
 };
 console.log(sleepIn(true, false)); // it return false
 console.log(sleepIn(true, true)); // it return true
 console.log(sleepIn(true, false)); // it return true

//  08. monkeyTrouble

var monkeyTrouble = function(aSmile, bSmile) {
 	if(aSmile === bSmile){
        return true
    }else{
        return false
    }
 };

 console.log(monkeyTrouble(true, true));
 console.log(monkeyTrouble(false, false));
 console.log(monkeyTrouble(true, false));
 console.log(monkeyTrouble(false, true));