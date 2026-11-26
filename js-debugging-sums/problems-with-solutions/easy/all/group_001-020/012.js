// JavaScript Debugging Challenge #012

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let password = 1234;
let enteredPassword = "1234";
if (password != enteredPassword) console.log("Wrong Password");
else console.log("Correct Password");

// ==================== SOLUTION ====================
let password = 1234;
let enteredPassword = "1234";
if (password !== enteredPassword) console.log("Wrong Password");
else console.log("Correct Password");

// ==================== EXPLANATION ====================
// // != coerces types; !== checks both type and value.

// ==================== EXPECTED OUTPUT ====================
// Wrong Password
