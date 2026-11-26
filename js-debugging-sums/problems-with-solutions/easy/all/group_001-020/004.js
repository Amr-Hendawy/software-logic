// JavaScript Debugging Challenge #004

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let isAdmin = "false";
if (isAdmin) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

// ==================== SOLUTION ====================
let isAdmin = false;
if (isAdmin) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}

// ==================== EXPLANATION ====================
// // The non-empty string 'false' is truthy. Store an actual boolean.

// ==================== EXPECTED OUTPUT ====================
// Access Denied
