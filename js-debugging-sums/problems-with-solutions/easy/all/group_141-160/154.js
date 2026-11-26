// JavaScript Debugging Challenge #154

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

function getDiscount(price, discount = 10) {
  return price - price * discount / 100;
}
console.log("Incorrect result");

// ==================== SOLUTION ====================
function getDiscount(price, discount = 10) {
  return price - price * discount / 100;
}
console.log(getDiscount(200));

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// 180
