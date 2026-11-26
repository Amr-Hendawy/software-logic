// JavaScript Debugging Challenge #166

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let outer = "global";
function test() {
  let inner = "local";
  return outer + " " + inner;
}
console.log("Incorrect result");

// ==================== SOLUTION ====================
let outer = "global";
function test() {
  let inner = "local";
  return outer + " " + inner;
}
console.log(test());

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// global local
