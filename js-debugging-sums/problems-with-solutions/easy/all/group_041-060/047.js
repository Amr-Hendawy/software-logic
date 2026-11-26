// JavaScript Debugging Challenge #047

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let score = 0;
let finalScore = score || 100;
console.log(finalScore);

// ==================== SOLUTION ====================
let score = 0;
let finalScore = score ?? 100;
console.log(finalScore);

// ==================== EXPLANATION ====================
// // OR replaces all falsy values including zero; nullish coalescing replaces only null or undefined.

// ==================== EXPECTED OUTPUT ====================
// 0
