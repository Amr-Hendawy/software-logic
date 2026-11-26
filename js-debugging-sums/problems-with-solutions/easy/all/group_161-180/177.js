// JavaScript Debugging Challenge #177

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const employee = { firstName: "Hana", lastName: "Samir" };
console.log("Incorrect result");

// ==================== SOLUTION ====================
const employee = { firstName: "Hana", lastName: "Samir" };
console.log(employee.firstName + " " + employee.lastName);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// Hana Samir
