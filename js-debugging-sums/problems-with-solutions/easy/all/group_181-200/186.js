// JavaScript Debugging Challenge #186

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const words = ["cat", "elephant", "dog"];
const longWords = words.map(word => word.length > 3);
console.log(longWords.join(","));

// ==================== SOLUTION ====================
const words = ["cat", "elephant", "dog"];
const longWords = words.filter(word => word.length > 3);
console.log(longWords.join(","));

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// elephant
