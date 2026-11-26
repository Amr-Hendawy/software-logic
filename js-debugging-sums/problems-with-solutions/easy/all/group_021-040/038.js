// JavaScript Debugging Challenge #038

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let names = ["Ali", "Ahmed", "Mona"];
if (names.indexOf("Sara")) console.log("Found");
else console.log("Not Found");

// ==================== SOLUTION ====================
let names = ["Ali", "Ahmed", "Mona"];
if (names.indexOf("Sara") !== -1) console.log("Found");
else console.log("Not Found");

// ==================== EXPLANATION ====================
// // indexOf returns -1 when missing. Test explicitly against -1; index 0 is also falsy.

// ==================== EXPECTED OUTPUT ====================
// Not Found
