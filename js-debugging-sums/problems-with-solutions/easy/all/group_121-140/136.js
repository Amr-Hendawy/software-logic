// JavaScript Debugging Challenge #136

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let output = [];
for (let i = 5; i >= 1; i--) {
  output.push(i);
}
console.log("Incorrect result");

// ==================== SOLUTION ====================
let output = [];
for (let i = 5; i >= 1; i--) {
  output.push(i);
}
console.log(output.join(","));

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// 5,4,3,2,1
