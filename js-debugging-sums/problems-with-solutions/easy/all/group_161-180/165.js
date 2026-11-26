// JavaScript Debugging Challenge #165

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

function showMessage(message = "Welcome") {
  return message;
}
console.log("Incorrect result");

// ==================== SOLUTION ====================
function showMessage(message = "Welcome") {
  return message;
}
console.log(showMessage());

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// Welcome
