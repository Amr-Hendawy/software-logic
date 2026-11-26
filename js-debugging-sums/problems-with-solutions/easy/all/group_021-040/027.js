// JavaScript Debugging Challenge #027

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let fileName = "image.png";
console.log(fileName.startsWith("png"));

// ==================== SOLUTION ====================
let fileName = "image.png";
console.log(fileName.endsWith("png"));

// ==================== EXPLANATION ====================
// // The extension is at the end of the filename, so use endsWith.

// ==================== EXPECTED OUTPUT ====================
// true
