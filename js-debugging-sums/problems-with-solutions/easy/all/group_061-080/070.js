// JavaScript Debugging Challenge #070

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

function welcome(name = "Guest") {
  console.log("Welcome " + name);
}
welcome(null);

// ==================== SOLUTION ====================
function welcome(name = "Guest") {
  name = name ?? "Guest";
  console.log("Welcome " + name);
}
welcome(null);

// ==================== EXPLANATION ====================
// // Default parameters apply to omitted arguments and undefined, not null. Nullish coalescing handles both null and undefined.

// ==================== EXPECTED OUTPUT ====================
// Welcome Guest
