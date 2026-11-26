// JavaScript Debugging Challenge #088

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let user = { name: "Ahmed", age: 0 };
if (user.age) console.log("Age Exists");
else console.log("Age Missing");

// ==================== SOLUTION ====================
let user = { name: "Ahmed", age: 0 };
if ("age" in user) console.log("Age Exists");
else console.log("Age Missing");

// ==================== EXPLANATION ====================
// // A value of zero is falsy but the property exists. Use in to test property existence.

// ==================== EXPECTED OUTPUT ====================
// Age Exists
