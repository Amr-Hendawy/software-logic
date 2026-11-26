// JavaScript Debugging Challenge #150

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let day = 3;
let dayName;
switch (day) {
  case 1: dayName = "Mon"; break;
  case 2: dayName = "Tue"; break;
  case 3: dayName = "Wed"; break;
  default: dayName = "Unknown";
}
console.log("Incorrect result");

// ==================== SOLUTION ====================
let day = 3;
let dayName;
switch (day) {
  case 1: dayName = "Mon"; break;
  case 2: dayName = "Tue"; break;
  case 3: dayName = "Wed"; break;
  default: dayName = "Unknown";
}
console.log(dayName);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// Wed
