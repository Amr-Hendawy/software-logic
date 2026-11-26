// JavaScript Debugging Challenge #168

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

var total = 5;
function update() {
  var total = 8;
  return total;
}
console.log("Incorrect result");

// ==================== SOLUTION ====================
var total = 5;
function update() {
  var total = 8;
  return total;
}
console.log(update(), total);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// 8 5
