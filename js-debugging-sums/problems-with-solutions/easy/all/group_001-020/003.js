// JavaScript Debugging Challenge #003

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let user = null;
if (typeof user === "null") {
  console.log("User is empty");
} else {
  console.log("User exists");
}

// ==================== SOLUTION ====================
let user = null;
if (user === null) {
  console.log("User is empty");
} else {
  console.log("User exists");
}

// ==================== EXPLANATION ====================
// // typeof null returns the string 'object'. Compare directly with null.

// ==================== EXPECTED OUTPUT ====================
// User is empty
