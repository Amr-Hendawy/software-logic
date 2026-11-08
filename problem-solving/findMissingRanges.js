function findMissingRanges(numbers, start, end) {
  const result = [];
  let current = start;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > current) {
      result.push([current, numbers[i] - 1]);
    }

    current = numbers[i] + 1;
  }

  if (current <= end) {
    result.push([current, end]);
  }

  return result;
}

const numbers = [1, 2, 5, 6, 10, 15];

console.log(findMissingRanges(numbers, 1, 20));
