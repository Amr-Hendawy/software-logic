// JavaScript Debugging Challenge #146

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let grade = 85;
let result;
if (grade >= 90) result = "A";
else if (grade >= 80) result = "B";
else result = "C";
console.log("Incorrect result");

// ==================== SOLUTION ====================
let grade = 85;
let result;
if (grade >= 90) result = "A";
else if (grade >= 80) result = "B";
else result = "C";
console.log(result);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// B
