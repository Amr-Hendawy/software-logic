// JavaScript Debugging Challenge #046

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let role = "admin";
switch (role) {
  case "admin":
    console.log("Admin");
  case "user":
    console.log("User");
    break;
  default:
    console.log("Guest");
}

// ==================== SOLUTION ====================
let role = "admin";
switch (role) {
  case "admin":
    console.log("Admin");
    break;
  case "user":
    console.log("User");
    break;
  default:
    console.log("Guest");
}

// ==================== EXPLANATION ====================
// // Without break, execution falls through into the next case.

// ==================== EXPECTED OUTPUT ====================
// Admin
