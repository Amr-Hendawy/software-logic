function compressString(str) {
  if (str.length === 0) {
    return "";
  }

  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }

  return result;
}

console.log(compressString("aaabbcccc"));
// a3b2c4

console.log(compressString("aabbcc"));
// a2b2c2

console.log(compressString("abcd"));
// a1b1c1d1
