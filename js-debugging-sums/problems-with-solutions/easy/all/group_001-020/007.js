// JavaScript Debugging Challenge #007

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let userName = " ";
if (userName === "") {
  console.log("Name Required");
} else {
  console.log("Welcome");
}

// ==================== SOLUTION ====================
let userName = " ";
if (userName.trim() === "") {
  console.log("Name Required");
} else {
  console.log("Welcome");
}

// ==================== EXPLANATION ====================
// // A space is not an empty string. trim() removes surrounding whitespace.

// ==================== EXPECTED OUTPUT ====================
// Name Required
