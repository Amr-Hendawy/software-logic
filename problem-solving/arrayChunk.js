function chunkArray(arr, size) {
  if (size <= 0) {
    return [];
  }

  const result = [];
  let chunk = [];

  for (let i = 0; i < arr.length; i++) {
    chunk.push(arr[i]);

    if (chunk.length === size) {
      result.push(chunk);
      chunk = [];
    }
  }

  if (chunk.length > 0) {
    result.push(chunk);
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(chunkArray(numbers, 3));
