// JavaScript Debugging Challenge #062

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

function introduce(name, age) {
  console.log("Name:", name);
  console.log("Age:", age);
}
introduce(25, "Ahmed");

// ==================== SOLUTION ====================
function introduce(name, age) {
  console.log("Name:", name);
  console.log("Age:", age);
}
introduce("Ahmed", 25);

// ==================== EXPLANATION ====================
// // Arguments are assigned to parameters by position. Pass the name first and age second.

// ==================== EXPECTED OUTPUT ====================
// Name: Ahmed\nAge: 25
