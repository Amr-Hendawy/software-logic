// JavaScript Debugging Challenge #127

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let nums = [10, 20, 30];
nums.push(40);
console.log("Incorrect result");

// ==================== SOLUTION ====================
let nums = [10, 20, 30];
nums.push(40);
console.log(nums[3]);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// 40
