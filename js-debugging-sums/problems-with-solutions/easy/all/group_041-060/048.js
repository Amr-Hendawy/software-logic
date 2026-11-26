// JavaScript Debugging Challenge #048

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let settings = { darkMode: false };
let darkMode = settings.darkMode || true;
console.log(darkMode);

// ==================== SOLUTION ====================
let settings = { darkMode: false };
let darkMode = settings.darkMode ?? true;
console.log(darkMode);

// ==================== EXPLANATION ====================
// // false is a deliberate boolean value. ?? preserves it while || replaces it.

// ==================== EXPECTED OUTPUT ====================
// false
