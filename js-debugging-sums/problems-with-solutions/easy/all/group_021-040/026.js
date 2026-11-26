// JavaScript Debugging Challenge #026

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let message = "Java is great. Java is easy.";
let result = message.replace("Java", "JavaScript");
console.log(result);

// ==================== SOLUTION ====================
let message = "Java is great. Java is easy.";
let result = message.replaceAll("Java", "JavaScript");
console.log(result);

// ==================== EXPLANATION ====================
// // replace without a global regular expression replaces only the first match. replaceAll replaces every match.

// ==================== EXPECTED OUTPUT ====================
// JavaScript is great. JavaScript is easy.
