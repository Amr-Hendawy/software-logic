// JavaScript Debugging Challenge #167

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let value = 10;
{
  let value = 20;
  console.log(value);
}
console.log("Incorrect result");

// ==================== SOLUTION ====================
let value = 10;
{
  let value = 20;
  console.log(value);
}
console.log(value);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// 20
// 10
