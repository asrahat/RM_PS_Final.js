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

var opposite = function (number) {
  return -number;
};
console.log(opposite(-7));

//  06. Simple Array Sum

var simpleArraySum = function (ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
  }
  return sum;
};
console.log(simpleArraySum([1, 2, 3, 4]));

//  07. sleepIn

var sleepIn = function (weekday, vacation) {
  return !weekday || vacation;
};
console.log(sleepIn(true, false)); // it return false
console.log(sleepIn(true, true)); // it return true
console.log(sleepIn(true, false)); // it return true

//  08. monkeyTrouble

var monkeyTrouble = function (aSmile, bSmile) {
  if (aSmile === bSmile) {
    return true;
  } else {
    return false;
  }
};

console.log(monkeyTrouble(true, true));
console.log(monkeyTrouble(false, false));
console.log(monkeyTrouble(true, false));
console.log(monkeyTrouble(false, true));

//  09. sumDouble

var sumDouble = function (a, b) {
  let sum = a + b;
  if (a === b) {
    return sum * 2;
  } else {
    return sum;
  }
};

console.log(sumDouble(3, 3));

//  10. diff21

var diff21 = function (n) {
  if (n > 21) {
    return (n - 21) * 2;
  } else {
    return n - 21;
  }
};
console.log(diff21(25));

// 11. parrotTrouble

var parrotTrouble = function(talking, hour) {
 	 if (talking && (hour < 7 || hour > 20)) {
        return true;
    } else {
        return false;
    }
 };

//  12. makes10

var makes10 = function(a, b) {
 	  if (a === 10 || b === 10 || a + b === 10) {
        return true;
    } else {
        return false;
    }
 };

//  13. nearHundred
var nearHundred = function(n) {
 	 return (Math.abs(n - 100) <= 10 ||
            Math.abs(n - 200) <= 10);
 };

//  14. posNeg: Return true when one number is positive and the other is negative. If negative is true, both must be negative.

var posNeg = function(a, b, negative) {
 	  if (negative) {
    return a < 0 && b < 0;
  } else {
    return (a < 0 && b > 0) || (a > 0 && b < 0);
  }
 };

//  15. notString: Add "not " to the beginning of a string unless it already starts with "not".

var notString = function(str) {
 	if(str.startsWith("not")) {
    return str;
  }else{
    return "not " + str;
  }
 };

//  16. Compare the Triplets: Compare two three-element score arrays and return how many points each person earns.

var compareTriplets = function(a, b) {
 	  let aPoints = 0;
  let bPoints = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aPoints++;
    } else if (a[i] < b[i]) {
      bPoints++;
    }
  }

  return [aPoints, bPoints];
 };

//  17. A Very Big Sum: Return the sum of all values in an integer array.

var aVeryBigSum = function(ar) {
 	let sum = 0;

  for (let i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
  }

  return sum;
 };

//  18. Staircase: Create a right-aligned staircase of height n using # characters.

var staircase = function(n) {
 	 let result = "";

  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let hashes = "#".repeat(i);

    result += spaces + hashes;

    if (i < n) {
      result += "\n";
    }
  }

  return result;
 };

//  19. Grading Students: Round a grade up to the next multiple of 5 when it is close enough; keep grades below 38 unchanged.

var gradingStudents = function(grades) {
 	let result = [];

  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];
    let nextMultiple = Math.ceil(grade / 5) * 5;

    if (grade >= 38 && nextMultiple - grade < 3) {
      grade = nextMultiple;
    }

    result.push(grade);
  }

  return result;
 };

//  20. Time Conversion: Convert a 12-hour AM/PM time string into 24-hour format.

var timeConversion = function(s) {
  let period = s.slice(-2);
  let time = s.slice(0, 8);
  let hour = Number(time.slice(0, 2));

  if (period === "AM") {
    if (hour === 12) {
      hour = 0;
    }
  } else {
    if (hour !== 12) {
      hour = hour + 12;
    }
  }

  return String(hour).padStart(2, "0") + time.slice(2);
};

// 21. String Repeat: Return a string repeated exactly n times.

var repeatStr = function(n, s) {
  return s.repeat(n);
};

// 22. Reversed Strings: Return the given string with its characters in reverse order.


var solution = function(str) {
  return str.split("").reverse().join("");
};

// 23. Sum of Positive: Return the sum of all positive numbers in an array. Return 0 if there are none.


var positiveSum = function(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }

  return sum;
};

// 24. Grasshopper - Summation: Return the sum of all integers from 1 through n.


var summation = function(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }

  return sum;
};

// 25. Convert a Boolean to a String: Convert a boolean value into the string "true" or "false".


var booleanToString = function(b) {
  return String(b);
};

