/*
Kelompokkan angka dalam 3 nested array.
1. Index 0 mengelompokkan angka genap
2. Index 1 mengelompokkan angka ganjil
3. Index 2 mengelompokkan angka yang bisa dibagi 3
*/

function numberGrouping(numbers) {
  const result = [[], [], []];

  for (let num of numbers) {
    if (num % 2 === 0) {
      result[0].push(num); // Angka genap
    }
    if (num % 2 !== 0) {
      result[1].push(num); // Angka ganjil
    }
    if (num % 3 === 0) {
      result[2].push(num); // Angka yang bisa dibagi 3
    }
  }

  return result;
}

console.log(numberGrouping([1, 2, 4, 6, 8])) // Output: [[2, 4, 8], [1], [6]]
