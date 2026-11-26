// JavaScript Debugging Challenge #005

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let userName;
console.log(userName);
if (userName === null) {
  console.log("No Name");
} else {
  console.log(userName);
}

// ==================== SOLUTION ====================
let userName;
console.log(userName);
if (userName === undefined) {
  console.log("No Name");
} else {
  console.log(userName);
}

// ==================== EXPLANATION ====================
// // A declared variable without an assigned value is undefined, not null.

// ==================== EXPECTED OUTPUT ====================
// undefined\nNo Name
