function sumDigits(number) {
  let sum = 0;

  while (number > 0) {
    let digit = number % 10;

    sum += digit;

    number = Math.floor(number / 10);
  }

  return sum;
}

console.log(sumDigits(372));    // 12
console.log(sumDigits(1234));  // 10
console.log(sumDigits(999));  // 27
console.log(sumDigits(500)); // 5