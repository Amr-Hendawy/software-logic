// JavaScript Debugging Challenge #068

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

function checkAge(age) {
  return "Checking...";
  if (age >= 18) return "Adult";
  return "Minor";
}
console.log(checkAge(20));

// ==================== SOLUTION ====================
function checkAge(age) {
  console.log("Checking...");
  if (age >= 18) return "Adult";
  return "Minor";
}
console.log(checkAge(20));

// ==================== EXPLANATION ====================
// // return immediately exits the function. Move the diagnostic log before the conditional returns.

// ==================== EXPECTED OUTPUT ====================
// Checking...\nAdult
