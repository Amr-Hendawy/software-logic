// JavaScript Debugging Challenge #050

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let user = {};
if (user) console.log("User Data Exists");
else console.log("Empty User");

// ==================== SOLUTION ====================
let user = {};
if (Object.keys(user).length > 0) console.log("User Data Exists");
else console.log("Empty User");

// ==================== EXPLANATION ====================
// // An empty object is truthy. Check the number of own enumerable keys.

// ==================== EXPECTED OUTPUT ====================
// Empty User
