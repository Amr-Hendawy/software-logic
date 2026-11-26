// JavaScript Debugging Challenge #043

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let age = 25;
let hasLicense = false;
if (age >= 18) {
  console.log("Adult");
  if (hasLicense);
  {
    console.log("Can Drive");
  }
}

// ==================== SOLUTION ====================
let age = 25;
let hasLicense = false;
if (age >= 18) {
  console.log("Adult");
  if (hasLicense) {
    console.log("Can Drive");
  }
}

// ==================== EXPLANATION ====================
// // The semicolon ends the if statement, making the following block unconditional within the outer if.

// ==================== EXPECTED OUTPUT ====================
// Adult
