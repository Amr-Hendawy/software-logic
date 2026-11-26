// JavaScript Debugging Challenge #142

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let role = "editor";
let access;
switch (role) {
  case "admin": access = "Full"; break;
  case "editor": access = "Edit"; break;
  default: access = "Read";
}
console.log("Incorrect result");

// ==================== SOLUTION ====================
let role = "editor";
let access;
switch (role) {
  case "admin": access = "Full"; break;
  case "editor": access = "Edit"; break;
  default: access = "Read";
}
console.log(access);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// Edit
