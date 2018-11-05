/*
Input: [1, 2, 3]
Output: [2, 4, 6]
*/

function double(array) {
  if (array.length === 0) {
    return [];
  }

  const doubledNumber = array[0] * 2;

  return [doubledNumber, ...double(array.slice(1))];
}

console.log(double([1, 2, 3]));
console.log(double([2, 4, 6]));

const doubledArray = [1, 2, 3].map(number => number * 2);

console.log(doubledArray);
