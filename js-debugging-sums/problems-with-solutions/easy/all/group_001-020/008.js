// JavaScript Debugging Challenge #008

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let result = "Hello" * 5;
if (result === NaN) {
  console.log("Invalid Number");
} else {
  console.log("Valid Number");
}

// ==================== SOLUTION ====================
let result = "Hello" * 5;
if (Number.isNaN(result)) {
  console.log("Invalid Number");
} else {
  console.log("Valid Number");
}

// ==================== EXPLANATION ====================
// // NaN is not equal to itself. Use Number.isNaN() to test for it.

// ==================== EXPECTED OUTPUT ====================
// Invalid Number
