// JavaScript Debugging Challenge #157

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

function greet(name) {
  return "Hello " + name;
}
console.log("Incorrect result");

// ==================== SOLUTION ====================
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Nour"));

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// Hello Nour
