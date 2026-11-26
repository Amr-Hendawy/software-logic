// JavaScript Debugging Challenge #173

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const student = {
  name: "Mariam",
  grades: { math: 90, science: 85 }
};
console.log("Incorrect result");

// ==================== SOLUTION ====================
const student = {
  name: "Mariam",
  grades: { math: 90, science: 85 }
};
console.log(student.grades.math);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// 90
