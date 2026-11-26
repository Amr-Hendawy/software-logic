// JavaScript Debugging Challenge #045

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let day = "1";
switch (day) {
  case 1:
    console.log("Saturday");
    break;
  default:
    console.log("Unknown Day");
}

// ==================== SOLUTION ====================
let day = "1";
switch (day) {
  case "1":
    console.log("Saturday");
    break;
  default:
    console.log("Unknown Day");
}

// ==================== EXPLANATION ====================
// // Switch compares case values strictly; string '1' does not match number 1.

// ==================== EXPECTED OUTPUT ====================
// Saturday
