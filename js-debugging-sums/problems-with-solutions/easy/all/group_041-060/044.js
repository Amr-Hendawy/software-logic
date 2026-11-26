// JavaScript Debugging Challenge #044

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let isLoggedIn = true;
let message = isLoggedIn ? "Please Login" : "Welcome Back";
console.log(message);

// ==================== SOLUTION ====================
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome Back" : "Please Login";
console.log(message);

// ==================== EXPLANATION ====================
// // The true branch must contain the welcome message for a logged-in user.

// ==================== EXPECTED OUTPUT ====================
// Welcome Back
