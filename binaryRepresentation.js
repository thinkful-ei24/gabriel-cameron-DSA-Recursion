function binary(num) {
  if (num === 0) {
    return '';
  }

  const remainder = num % 2;

  return binary((num - remainder) / 2) + remainder;
}

console.log(binary(3));
console.log(binary(25));
