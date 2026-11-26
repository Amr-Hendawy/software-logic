// JavaScript Debugging Challenge #083

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let user = {
  profile: { address: { city: "Cairo" } }
};
console.log(user.profile.address);

// ==================== SOLUTION ====================
let user = {
  profile: { address: { city: "Cairo" } }
};
console.log(user.profile.address.city);

// ==================== EXPLANATION ====================
// // The requested city is one level deeper than address.

// ==================== EXPECTED OUTPUT ====================
// Cairo
