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